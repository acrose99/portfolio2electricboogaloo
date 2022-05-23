import { createStitches } from '@stitches/react'
import {
  mint,
  mintA,
  mintDark,
  sage,
  sageA,
  sageDark,
  sky,
  skyA,
  violet,
  violetA,
} from '@radix-ui/colors';
export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...mint,
      ...mintA,
      ...sage,
      ...sageA,
      ...sky,
      ...skyA,
      ...violet,
      ...violetA,
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      'xs': '12px',
      'sm': '14px',
      'md': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '84px',
      '9xl': '96px',
    },
    fonts: {
      system: 'system-ui',
      inter: 'Inter, sans-serif',
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
})

const darkTheme = createTheme({
  colors: {
    ...mintDark,
    ...sageDark,
  },
});