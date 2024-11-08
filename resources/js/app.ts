import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, DefineComponent, h } from 'vue';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const modules = import.meta.glob<DefineComponent>(['./Pages/**/*.vue', '../../vendor/mxent/*/resources/js/Pages/**/*.vue']);
for(const key in modules) {
    if(!key.startsWith('./Pages/')) {
        const keyBits = key.split('Pages/');
        const newKey = `./Pages/${keyBits[keyBits.length - 1]}`;
        modules[newKey] = modules[key];
        delete modules[key];
    }
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            modules,
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});