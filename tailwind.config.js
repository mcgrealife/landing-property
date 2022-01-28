const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
  ],
  theme: {
    // make gilroy first font in family (not override it in index)
    extend: {
      BoxShadow: {
        'card': '0_0.654028px_3.92417px_rgba(60,64,67,0.24)',
      },
      dropShadow: {
        'frame': 'drop-shadow(0_15.1865px_12.1492px_rgba(0,0,0,0.0655718);drop-shadow(0_8.51341px_6.81073px_rgba(0,0,0,0.055));drop-shadow(0_4.52141px_3.61713px_rgba(0,0,0,0.0444282));drop-shadow(0_1.88146px_1.50517px_rgba(0,0,0,0.030926))'
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
        '.frame-shadow':
          { 'filter': 'drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0655718)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.055)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0444282)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.030926));' }
      }
      )
    }),
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
        '.arrowDownWhite': {
          'width': '0',
          'height': '0',
          'border-style': 'solid',
          'border-width': '3.92px 3.27px 0 3.27px',
          'border-color': '#ffffff transparent transparent transparent'
        },
        '.arrowDownBlue': {
          'width': '0',
          'height': '0',
          'border-style': 'solid',
          'border-width': '3.92px 3.27px 0 3.27px',
          'border-color': '#366CA5 transparent transparent transparent'
        },

      }
      )
    })
  ],
}
