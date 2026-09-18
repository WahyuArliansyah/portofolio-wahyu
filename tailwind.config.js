/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#94a3b8",
        dark: "#0f172a",
        "dark-bg": "#0b0f17",
        "dark-card": "#131c2e",
        "dark-border": "#1e293b",
        "accent-cyan": "#06b6d4",
        "accent-indigo": "#6366f1",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(20, 184, 166, 0.3)",
        "glow-lg": "0 0 35px -5px rgba(20, 184, 166, 0.4)",
        "glow-cyan": "0 0 25px -5px rgba(6, 182, 212, 0.3)",
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
};

