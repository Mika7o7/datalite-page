export type ThemeType = typeof defaultTheme

export const defaultTheme = {
  container1Color: '#fff',
  container2Color: '#F7F5FF',
  container3Color: '',
  container4Color: '0px 8px 20px #EEEEEE',
  container5Color: '#fff',

  background: '#fff',
  header: {
    height: '88px',
    background: 'rgba(240, 240, 240, 0.2)',
  },

  // ************* Fonts ************* //
  typography: {
    archivo: 'Archivo Black, sans-serif',
    openSans: 'Open Sans, sans-serif',
    titles: {
      default: {
        fontSize: '24px',
        lineHeight: '30px',
      },
      mode1: {
        fontSize: '64px',
        lineHeight: '88px',
      },
      mode2: {
        fontSize: '48px',
        lineHeight: '68px',
      },
    },
    texts: {
      default: {
        fontSize: '16px',
        lineHeight: '24px',
      },
      mode1: {
        fontSize: '20px',
        lineHeight: '30px',
      },
      mode2: {
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
  },

  // ************* Colors ************* //
  colors: {
    white: '#fff',

    black: '#000',
    blackPallet1: '#0E191E',

    violet: '#605BFF',
    violetPallet1: '#9F5BFF',
    violetPallet2: 'rgba(159, 91, 255, 0.3)',
    violetPallet3: '#150E1D',
    violetPallet4: '#110B17',
    violetPallet5: '#20162D',

    gray: '#eeeeee',
    grayPallet1: '#868B8D',
    grayPallet2: '#F7F5FF',
    grayPallet3: 'rgba(240, 240, 240, 0.2)',

    gradientLight:
      'linear-gradient(58.62deg, rgba(96, 91, 255, 0.75) 0%, rgba(159, 91, 255, 0.75) 100%)',
    gradientDark:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(58.62deg, rgba(96, 91, 255, 0.75) 0%, rgba(159, 91, 255, 0.75) 100%)',

    boxShadowLight: '0px 8px 20px #EEEEEE',
    boxShadowDark: '0px 8px 20px rgba(0, 0, 0, 0.2)',
  },

  // ************* Media ************* //
  media: {
    header: {
      height: '60px',
    },
    typography: {
      titles: {
        default: {
          fontSize: '24px',
          lineHeight: '30px',
        },
        mode1: {
          fontSize: '24px',
          lineHeight: '30px',
        },
        mode2: {
          fontSize: '24px',
          lineHeight: '30px',
        },
      },
    },
  },
}

// export const darkTheme = {
//   ...defaultTheme,
//   container1Color: '#1E1E1E',
//   container2Color: '#20162D',
//   container3Color:
//     '',
//   container4Color: '0px 8px 20px rgba(0, 0, 0, 0.2);',
//   container5Color: '#110B17',
// }
