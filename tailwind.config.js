/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
    },
  },
  plugins: [],
};
