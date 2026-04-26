// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#4FDBC8",    // Bright Teal
                    secondary: "#518077",  // Muted Forest Green
                    tertiary: "#FFB862",   // Soft Orange
                    neutral: "#727876",    // Medium Gray
                    dark: "#171A1A",       // Near Black (used for "Inverted" buttons)
                    tealDark: "#00675B",   // The deep teal used in the "Primary" button
                },
                surface: {
                    light: "#F1F4F4",      // The light gray card background
                    border: "#D1D5D5",     // Subtle borders for inputs/outlined buttons
                }
            },
            fontFamily: {
                manrope: ["Manrope", "sans-serif"], // The font specified in the screenshot
            },
        },
    },
    plugins: [],
};
export default config;