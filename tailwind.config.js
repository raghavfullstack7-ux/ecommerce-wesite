/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        chalk: "#FFFFFF",
        parchment: "#F2F0F1",
        ash: "#F0F0F0",
        smoke: "#9B9B9B",
        charcoal: "#5A5A5A",
        "sale-neon": "#E8FF00",
        danger: "#FF3333",
        success: "#00C851",
        gold: "#F5A623",
      },
      fontFamily: {
        display: ['Bebas Neue', 'Arial Black', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'silky': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      boxShadow: {
        'card': '0 2px 16px rgba(0,0,0,0.06)',
        'hover': '0 16px 48px rgba(0,0,0,0.14)',
        'modal': '0 32px 80px rgba(0,0,0,0.24)',
        '3d': '8px 8px 0px #0A0A0A',
      }
    },
  },
  plugins: [],
}
