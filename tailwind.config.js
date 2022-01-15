const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      dark: "#0A2337",
      primary: "#3280C2",
      gray: "#98A3AB",
      ...colors
    },
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
      },
    },
    spacing: {
      '1.25': '5px',
      '3.25': '13px',
      '3.75': '15px',
      '4.25': '17px',
      '4.5': '18px',
      '7.5': '30px',
      '10.5': '42px',
      '12.5': '50px',
      '13': '52px',
      '15': '60px',
      '18.5': '74px',
      '24': '96px',
      '32.5': '130px',
      '37.5': '150px',
      '39': '156px',
      '41.5': '166px',
      '71.5': '286px',
      '80': '320px',
      '102.5': '410px',
      '103.75': '415px',
      '300': '1200px',
      ...defaultTheme.spacing
    },
    screens: {
      'xs': {
        'max': '520px'
      },
      'sm': {
        'max': '640px',
      },
      'md': {
        'max': '1046px',
        'min': '641px'
      },
      'lg': {
        'max': '1260px',
      },

    },
  },
  plugins: [],
}