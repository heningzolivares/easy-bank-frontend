const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      brand: '#2D314D',
      primary: '#2D314E',
      secondary: '#959499',
      gray: {
        300: '#99989D',
      },
      green: {
        500: '#31CF72',
      },
      blue: {
        300: '#2CBAC7',
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Public Sans', sans-serif"],
      },
      borderRadius: {
        '4xl': '89px',
      },
      width: {
        btnwidth: '165px',
      },
      margin: {
        pagecontainer: '165px',
      },
    },
  },
  plugins: [],
};
