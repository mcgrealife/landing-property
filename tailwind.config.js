const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {
      BoxShadow: {
        'card': '0px 0.654028px 3.92417px rgba(60, 64, 67, 0.24)',
      },
      dropShadow: {
        'frame': 'drop-shadow(0px 15.1865px 12.1492px rgba(0, 0, 0, 0.0655718)) drop-shadow(0px 8.51341px 6.81073px rgba(0, 0, 0, 0.055)) drop-shadow(0px 4.52141px 3.61713px rgba(0, 0, 0, 0.0444282)) drop-shadow(0px 1.88146px 1.50517px rgba(0, 0, 0, 0.030926))',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
      },
      colors: {
        'resider': {
          'blue': {
            'primary': '#366CA5'
          },
          'text': {
            'p': '#606367'
          }
        }
      }
    },

  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    }),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.arrowDown': {
          'width': '0',
          'height': '0',
          'border-style': 'solid',
          'border-width': '3.92px 3.27px 0 3.27px',
          'border-color': '#ffffff transparent transparent transparent'
        }
      }
      )
    })
  ],
}
