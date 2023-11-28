/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          to: {
            transform: "rotate(360deg)",
          },
        },
      },
      colors: {
        "button-color": "#FF7272",
        "background-color": "#1E1D28",
        "table-header-color": "#BD5454",
        "table-dark-color": "#F09A9A",
        "table-light-color": "#FFE7E7",
      },
    },
    fontFamily: {
      abc: ["Montserrat"],
    },
  },
  plugins: [
    function ({ addUtilities, variants }) {
      const animations = {
        ".animate-spin-fast": {
          animation: "spin 5s linear infinite",
        },
      };

      addUtilities(animations, variants("animate"));
    },
  ],
};
