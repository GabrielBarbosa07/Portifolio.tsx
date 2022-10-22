/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bl-200": "#7AC7E3",
        "bl-500": "#313958",
        "bl-700": "#1B2138",
        "bl-800": "#1E253E",
        "bl-900": "#11172B",

        "gra-300": "#C4C4C4",
        "gra-600": "#848DA0",
        "gra-700": "#444B5B",

        "gree-200": "#0EE7B7",

        error: "#d45d5d",
      },
      fontFamily: {
        mont: ["Montserrat"],
        sans: ["sans-serif"],
        mono: ["JetBrains Mono"],
      },
    },

    backgroundImage: {
      gradient: "linear-gradient(225deg, #313860 0%, #11172b 100%)",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
