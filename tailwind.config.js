/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Yahan colors ko pakka check karein
                primary: "#6366f1",   // Indigo color
                secondary: "#a855f7", // Purple color
                dark: "#0f172a",      // Deep Dark Blue/Black
            },
        },
    },
    plugins: [],
}