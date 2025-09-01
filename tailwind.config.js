/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandBg: "#f1f1f6",
        brandPrimary: "#4c4c96",
        brandFigure: "#323261"
      }
    }
  },
  plugins: []
};
