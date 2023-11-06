/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "button-color": "#CC7E93",
        "background-color": "#E1AEBB",
        "table-header-color": "#BD5454",
        "table-dark-color": "#F09A9A",
        "table-light-color": "#FFE7E7",
      },
    },
    fontFamily: {
      abc: ["Montserrat"],
    },
  },
  plugins: [],
};
