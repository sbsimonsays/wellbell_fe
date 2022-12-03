/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './public/index.html',
    './src/**/*.{html,js}',
  ],
   
  theme: {
   
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
