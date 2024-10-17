/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display SC", "serif"],
      },
      colors: {
        "primary-orange": "#EB8D08",
      },
    },
  },
  plugins: [],
};
