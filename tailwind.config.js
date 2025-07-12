/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        dark: "#050505",
        light: "#ffffff",
        accent: "#3a8bfd",
        muted: "#b0b0b0",
        primary: "#0f172a",
      },
    },
  },
  plugins: [],
};
