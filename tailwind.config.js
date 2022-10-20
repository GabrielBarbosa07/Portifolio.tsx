/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "b-200": "#7AC7E3",
      "b-500": "#313958",
      "b-700": "#1B2138",
      "b-800": "#1E253E",
      "b-900": "#11172B",

      "gr-300": "#C4C4C4",
      "gr-600": "#848DA0",
      "gr-700": "#444B5B",

      "gre-200": "#0EE7B7",
    },
  },
  plugins: [],
};
