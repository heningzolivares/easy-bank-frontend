const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      brand: '#2D314D',
      primary: '#2D314E',
      secondary: '#959499',
      gray: {
        50: '#FAFAFA',
        100: '#F4F5F7',
        200: '#F9F9F9',
        300: '#99989D',
        400: '#D1D5DB',
      },
      green: {
        300: '#77BDA3',
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
        lx: '41px',
      },
      width: {
        btnwidth: '165px',
        formwidth: '690px',
      },
      margin: {
        pagecontainer: '165px',
      },
      height: {
        '80vh': '80vh',
      },
      lineHeight: {
        11: '62px',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
