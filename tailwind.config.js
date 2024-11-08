/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/mxent/**/*.blade.php',
        './vendor/mxent/**/*.ts',
        './vendor/mxent/**/*.vue',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.ts',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'system-ui',
                    '-apple-system',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    '"Noto Sans"',
                    '"Liberation Sans"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',
                ],
                mono: [
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    '"Liberation Mono"',
                    '"Courier New"',
                    'monospace',
                ],
            },
        },
    },
    plugins: [],
};