module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'lightgray': '#f8f8fb',
        'blue': '#6790fa',
        'pink':'#e57b97',
        'lightblue': '#90a4fa',
        'navy': '#08090f',
        'integraldark':'#fe8dc6',
        'integrallight':'#fed1c7'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}