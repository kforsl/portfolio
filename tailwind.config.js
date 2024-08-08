/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      krona: ["Krona One", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      primary: "#BBFF67",
      "primary-dark": "#83B348",
      bg: "rgba(0,0,0,1)",
      grayish: "#383838",
      black: "#000000",
      white: "#FBFCFF",
    },
    extend: {
      boxShadow: {
        footer: "0 0 16px rgba(255, 255, 255, 0.3)",
        hover: "inset 0 0 8px rgba(0,0,0,.8)",
        nav: "inset 1px 2px 3px rgba(255,255,255,0.5),inset -2px -2px 4px rgba(0,0,0,.5),1px 2px 4px rgba(0,0,0,.5)",
      },
      minHeight: {
        60: "60rem",
      },
      spacing: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
