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
        'blue': '#4486f0',
        'lightblue': '#90a4fa',
        'lightpurple': '#c4c9e4',
        'green':'#86dc96',
        'darkgreen': '#56B664',
        'gray': '#08090f', //it's not gray LOL
        'teal':'#acd5e2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}