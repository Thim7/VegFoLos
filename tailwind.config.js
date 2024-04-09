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
                error: '#ba1a1a',
                'error-container': '#ffdad6',
                on: {
                    primary: '#ffffff',
                    'primary-container': '#ffffff',
                    secondary: '#ffffff',
                    'secondary-container': '#1b3811',
                    'tertiary-container': '#4e523e',
                    error: '#ffffff',
                    'error-container': '#410002',
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
        breadcrumbs: {
            defaultProps: {
                className: '',
                fullWidth: false,
                separator: '/',
            },
            styles: {
                base: {
                    root: {
                        initial: {
                            width: 'w-max',
                        },
                        fullWidth: { display: 'block', width: 'w-full' },
                    },
                    list: {
                        display: 'flex',
                        flexWrap: 'flex-wrap',
                        alignItems: 'items-center',
                        width: 'w-full',
                        bg: 'bg-blue-gray-50',
                        bgOpacity: 'bg-opacity-60',
                        py: 'py-2',
                        px: 'px-4',
                        borderRadius: 'rounded-md',
                    },
                    item: {
                        initial: {
                            display: 'flex',
                            alignItems: 'items-center',
                            color: 'text-light-on-surface',
                            fontSmoothing: 'antialiased',
                            fontFamily: 'font-sans',
                            fontSize: 'text-sm',
                            fontWeight: 'font-normal',
                            lineHeight: 'leading-normal',
                            cursor: 'cursor-pointer',
                            transition: 'transition-colors duration-300',
                            hover: 'hover:text-light-primary',
                        },
                        disabled: {
                            pointerEvents: 'pointer-events-none',
                        },
                    },
                    separator: {
                        color: 'text-light-on-surface',
                        fontSize: 'text-sm',
                        fontSmoothing: 'antialiased',
                        fontFamily: 'font-sans',
                        fontWeight: 'font-normal',
                        lineHeight: 'leading-normal',
                        px: 'mx-2',
                        pointerEvents: 'pointer-events-none',
                        userSelcet: 'select-none',
                    },
                },
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
