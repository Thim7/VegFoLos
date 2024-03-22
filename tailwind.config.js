const withMT = require('@material-tailwind/react/utils/withMT');
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
    content: ['./src/**/*.{html,js}'],
    theme: {
        corePlugins: {
            preflight: false,
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            light: {
                background: '#f8faf3',
                primary: '#235b2f',
                'primary-container': '#498150',
                secondary: '#47663a',
                'secondary-container': '#a6ca94',
                tertiary: '#5c614c',
                'tertiary-container': '#eff3d8',
                on: {
                    primary: '#ffffff',
                    'primary-container': '#ffffff',
                    secondary: '#ffffff',
                    'secondary-container': '#1b3811',
                    'tertiary-container': '#4e523e',
                    surface: '#191c19',
                    'surface-variant': '#414940',
                    background: '#191c19',
                },
                surface: '#f8faf3',
                'surface-variant': '#dde5d9',
                'surface-container': {
                    lowest: '#ffffff',
                    low: '#f2f4ee',
                    medium: '#ecefe8',
                    high: '#e7e9e2',
                    highest: '#e1e3dd',
                },
                outline: '#71796f',
                'outline-variant': '#c1c9bd',
            },
        },
        extend: {
            opacity: {
                8: '.08',
                12: '.12',
                16: '.16',
            },
        },
    },
    plugins: [],
});
