/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#6366F1',
                accent: '#A855F7',
                success: '#10B981',
                darkBg: '#0F172A',
                darkText: '#E2E8F0'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Satoshi', 'sans-serif'],
            },
        },
    },
    plugins: [],
};