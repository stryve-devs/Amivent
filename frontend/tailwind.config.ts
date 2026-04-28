import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Your Brand Identity Colors
                brand: {
                    primary: "#4FDBC8",    // Bright Teal
                    secondary: "#518077",  // Muted Forest Green
                    tertiary: "#FFB862",   // Soft Orange
                    neutral: "#727876",    // Medium Gray
                    dark: "#171A1A",       // Near Black
                    tealDark: "#00675B",   // Deep Teal
                },
                // Functional "Neo-Minimalist" Palette
                primary: '#4fdbc8',
                'on-primary': '#003730',
                'primary-container': '#4fdbc8',
                'on-primary-container': '#00201c',
                secondary: '#515f74',
                'secondary-container': '#d5e3fd',
                background: '#f7f9fc',
                surface: '#f7f9fc',
                'surface-container': '#eceef1',
                'surface-container-low': '#f2f4f7',
                'surface-container-high': '#e6e8eb',
                outline: '#6c7a77',
                'outline-variant': '#bbcac6',
                error: '#ba1a1a',
                'error-container': '#ffdad6',
            },
            borderRadius: {
                // Custom radius for your Amivent components
                '2xl': '1rem',
                '3xl': '3rem', // Used in your animated AuthPage card
                full: '9999px',
            },
            fontFamily: {
                // Amivent Font Stacks
                manrope: ["Manrope", "sans-serif"],
                headline: ['Manrope', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};

export default config;