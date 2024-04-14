/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        defaultBlack: "#1C1D22",
        secondaryBlack: "#222327",
        primaryBlack: "#2A2B2F",
        "dark--gray": "#1C1D22",
        "light--gray": "rgba(28, 29, 34, 0.08)",
        "light--dark": "rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};
