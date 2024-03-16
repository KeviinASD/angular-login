/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121418",
        primary: "#00C39A",
        secondary: "#EACD6F",
        "gris-500": "#222222",
        "grids-400": "#7C7C7C",
      }
    },
  },
  plugins: [],
}
