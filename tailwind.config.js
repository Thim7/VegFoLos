/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        corePlugins: {
            preflight: false,
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            green: '#9DC08B',
        },
        extend: {
            keyframes: {
                changeState: {
                    '0%': { opacity: 0 },
                    '50%': { opacity: 0.5 },
                    '100%': { opacity: 1 },
                },
            },
            animation: {
                changeState: 'changeState 3s linear 1000',
            },
        },
    },
    plugins: [],
};
