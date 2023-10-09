/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {fontFamily:{'Kanit':['Kanit']},
    extend: {},
  },
  plugins: [require("daisyui")],
}

