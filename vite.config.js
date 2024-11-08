import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: 'resources/js',
                customResolver: function (a, b) {
                    let basePath = a;
                    const pathBits = b.split('/');
                    if(pathBits.includes('vendor')) {
                        const vendorIdx = pathBits.indexOf('vendor');
                        const vendorBits = pathBits.slice(vendorIdx, vendorIdx + 3);
                        basePath = path.join(...vendorBits, basePath);
                    }
                    basePath = path.resolve(basePath);
                    return basePath;
                }
            },
            {
                find: '@mxent',
                replacement: 'vendor/mxent',
                customResolver: function (a, b) {
                    const vendorBits = a.split('/');
                    vendorBits.splice(3, 0, 'resources');
                    vendorBits.splice(4, 0, 'js');
                    let basePath = path.join(...vendorBits);
                    basePath = path.resolve(basePath);
                    return basePath;
                },
            },
            {
                find: 'vendor',
                replacement: path.resolve(__dirname, 'vendor'),
            },
        ],
    },
});