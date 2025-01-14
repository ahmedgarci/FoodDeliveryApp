const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", flowbite.content()],
  theme: {
    extend: {},
  },
  colors: {
    customRed: "#EF4C29",
  },
  plugins: [flowbite.plugin()],
};
