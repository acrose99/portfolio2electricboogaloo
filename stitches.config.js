import { createStitches } from '@stitches/react'
import {
  mint,
  mintA,
  mintDark,
  sage,
  sageA,
  sageDark,
  sky,
  skyDark,
  skyA,
  violet,
  violetDark,
  violetA,
  mintDarkA,
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
      navbg: mint.mint1,
    },
    shadows: {
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
    lineHeights: {
      'xs': '160%',
      'sm': '150%',
      'md': '150%',
      'lg': '150%',
      'xl': '150%',
      '2xl': '150%',
      '3xl': '110%',
      '4xl': '110%',
      '5xl': '110%',
      '6xl': '110%',
      '7xl': '110%',
      '8xl': '110%',
      '9xl': '110%',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fonts: {
      system: 'system-ui',
      robotoMono: 'Roboto Mono, monospace',
      inter: 'Inter, sans-serif',
      notoSerif: 'Noto Serif, serif',
      oleoSwash: 'Oleo Script Swash Caps, cursive',
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
    shadowSm: (color) => ({
      boxShadow: `0 1px 2px 0 ${color}`,
    }),
    shadowMd: (color) => ({
      boxShadow: `0 4px 6px -1px ${color}, 0 2px 4px -2px ${color}`,
    }),
    shadowLg: (color) => ({
      boxShadow: `0 10px 15px -3px ${color}, 0 4px 6px -4px ${color}`,
    }),
    shadowXl: (color) => ({
      boxShadow: `0 20px 25px -5px ${color}, 0 8px 10px -6px ${color}`,
    }),
    shadowInner: (color) => ({
      boxShadow: `inset 0 2px 4px 0px ${color}`,
    }),
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...mintDark,
    ...sageDark,
    ...skyDark,
    ...violetDark,
    navbg: mintDark.mint3,
  },
  shadows: {
    ...mintDark,
    ...mintA,
    ...sageDark,
    ...sageA,
    ...skyDark,
    ...skyA,
    ...violetDark,
    ...violetA,
  },
});
