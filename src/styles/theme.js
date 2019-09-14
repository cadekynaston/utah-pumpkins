export const theme = {
  colors: {
    dark: '#171E16',
    light: '#F0EDEE',
    darkOrange: '#B04420',
    orange: '#DE6629',
    gray: '#7C7C7C',
    purple: '#614685'
  },

  maxWidth: '1400px',

  fonts: {
    lacquer: `'Yeon Sung', cursive`,
  },

  mediaSizes: {
    small: {
      selector: 'max-width',
      values: '640px'
    },
    medium: {
      selector: 'max-width',
      values: '1023px'
    },
    mediumUp: {
      selector: 'min-width',
      values: '640px'
    },
    mediumOnly: {
      values: ['640px', '1023px']
    },
    largeUp: {
      selector: 'min-width',
      values: '1024px'
    },
  },
}
