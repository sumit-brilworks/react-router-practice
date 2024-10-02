const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["text-sky-600", "hover:text-sky-600", "underline"],
  theme: {
    extend: {},
  },
  plugins: [],
});
