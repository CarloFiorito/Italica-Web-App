/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "#0A2647",
        "pervinca-primary": "#2C74B3",
        "button-dark-violet-primary": "#3422A4",
        "button-light-blue-primary": "#5BC0F8",
      },
    },
  },
  plugins: [require("tailwindcss-inner-border")],
};
