const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}",
  ],
  theme: {
    // make gilroy first font in family (not override it in index)

    gridTemplateAreas: {
      'mobile': [
        // 'header header header',
        'left right'
      ],
      'desktop': [
        // 'header header header',
        'left middle right'
      ],

      'phone': [
        'wrapper wrapper wrapper wrapper wrapper',
        'wrapper frame frame frame wrapper',
        'wrapper frame screen frame wrapper',
        'wrapper frame frame frame wrapper',
        'wrapper wrapper wrapper wrapper wrapper',
      ],
      'screen': [
        'status',
        'body'
      ]
    },
    gridTemplateColumns: {
      'mobile': '1fr, 1fr',
      'desktop': '1fr, 370px, 1fr',
      'phoneMobile': 'minmax(0,45.5px) 9.5px 255px 9.5px minmax(0,45.5px)',
      'phoneDesktop': 'minmax(0,78px) 13px 344px 13px minmax(0,78px)',
      'screenMobile': 'auto',
      'screenDesktop': 'auto'
    },
    gridTemplateRows: {
      'mobile': 'auto',
      'desktop': 'auto',
      'phoneMobile': '28px 8px 552px 8px 49px',
      'phoneDesktop': '28px 11px 745px 11px 49px',
      'screenMobile': '30px 522.5px',
      'screenDesktop': '40px 705px'
    },
    extend: {
      BoxShadow: {
        'card': '0_0.654028px_3.92417px_rgba(60,64,67,0.24)',
      },
      dropShadow: {
        'frame': 'drop-shadow(0_15.1865px_12.1492px_rgba(0,0,0,0.0655718);drop-shadow(0_8.51341px_6.81073px_rgba(0,0,0,0.055));drop-shadow(0_4.52141px_3.61713px_rgba(0,0,0,0.0444282));drop-shadow(0_1.88146px_1.50517px_rgba(0,0,0,0.030926))',
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
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '19:': '19',
        '20': '20'
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
          { 'filter': 'drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0655718)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.055)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0444282)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.030926));' },
        '.frame-shadow-none':
          { 'filter': 'drop-shadow(0 0 0 white);' }
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
    }),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
  variants: {
    gridTemplateAreas: ['responsive']
  }
}
