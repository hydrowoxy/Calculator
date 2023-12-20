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
        'purple':'#A588C4',

        'integraldark':'#fe8dc6',
        'integrallight':'#fed1c7',

        'texdark':'#ef4136',
        'texlight':'#fbb040',

        'binarydark':'#00a1ff',
        'binarylight':'#00ff8f'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bold-left-header': {
          'font-size': '1.875rem', 
          'line-height': '2.25rem', 
          'font-weight': '500', 
          'text-align': 'left', 
          'margin-bottom': '4rem', 
          'color': '#08090f', 
        },
        '.description': {
          'font-size': '1.7rem', 
          'color': '#001f3f', 
          'margin-top': '1.75rem', 
          'margin-bottom': '2.5rem',
          'line-height': '1.625',
        },
        '.title-orange': {
          'font-size': '5.25rem', 
          'line-height': '1.1111', 
          'font-weight': '500', 
          'background-image': 'linear-gradient(to right, #ef4136, #fbb040)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'display': 'inline-block',
          'transition': 'background-position 0.3s ease',
        },
        '.title-teal': {
          'font-size': '5.25rem', 
          'line-height': '1.1111', 
          'font-weight': '500', 
          'background-image': 'linear-gradient(to right, #00a1ff, #00ff8f)',
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'display': 'inline-block',
          'transition': 'background-position 0.3s ease',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}