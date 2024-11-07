/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif'], // sets Poppins as the default sans font
      },
    },
  },
  plugins: [],
};
