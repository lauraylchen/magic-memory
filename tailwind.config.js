/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue': '#637DFF',
        'yellow': '#FFF9C2',
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}
