const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    color: {
      darkblue: '#2D314D',
      primary: '#2D314E',
      label: '#2D314E',
      muted: '#959499',
      gray: '#99989D',
      turquoise: '#31CF72',
      litblue: '#2CBAC7',
    },
    extend: {
      fontFamily: {
        sans: ["'Public Sans', sans-serif", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
