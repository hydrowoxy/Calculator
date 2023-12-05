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
        'blue': '#5077e0',
        'pink': '#c99dcb',
        'lightpurple': '#c4c9e4',
        'gray': '#3c3b3f',
        'teal':'#acd5e2',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}