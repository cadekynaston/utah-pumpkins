export const theme = {
  colors: {
    black: '#000',
    white: '#fff',
    dark: '#11151C',
    light: '#F0F7EE',
    purple: '#614685',
    darkOrange: '#B04420',
    coral: '#F67E7D',
    orange: '#F67E3D',
    gray: '#CECCCC',
    ruby: '#734B5E',
    wenge:'#6D545D',
    space: '#464655',
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
