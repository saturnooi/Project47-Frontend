/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-pale": "rgba(75, 183, 214, 0.4)",
        "custom-blue": "rgb(75, 183, 214)",
        "custom-blue": "#285DC8",
        "custom-main": "#218C9F",
        "custom-main-light": "#4BB7D6",
        "custom-main-super-light": "#8fc5d4",
        "custom-main-dark": "#06667D",
        "custom-main-super-dark": "#01404E",
        "custom-main-super-super-dark": "#051225",
        "custom-red": "#E16A79",
        "custom-red-light": "#de909a",
        "custom-green": "#27AE60",
        "custom-green-light": "#80b998",
        "custom-orange-brown": "#DA9280",
        "custom-orange-brown-light": "#dba89b",
        "custom-gray": "#F2F2F2",
        "custom-gray-dark": "#565E6D",
        "custom-gray-mini-dark": "#D9D9D9",
      },
      fontFamily: {
        sfPro: ["SF_PRO", "cursive"],
      },
      dropShadow: {
        "custom-shadow": "0px 4px 4px rgba(75, 183, 214, 0.4)",
      },
    },
  },
  plugins: [],
};
