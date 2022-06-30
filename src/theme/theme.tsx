import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const semanticTokens = {
  colors: {
    primary: '#fb7185',
    primary_light: '#fc9caa',
    primary_dark: '#e26678',
    primary_pastel: 'rgba(251,113,133,0.3)',
    primary_graded: 'linear-gradient(to right, #fb7185, #ffc371)',

    white: {
      default: '#fafafa',
      _dark: '#171717',
    },
    black: {
      default: '#171717',
      _dark: '#fafafa',
    },
    gray_1: {
      default: '#d4d4d4',
      _dark: '#262626',
    },
    gray_2: {
      default: '#a3a3a3',
      _dark: '#404040',
    },
    gray_3: {
      default: '#737373',
      _dark: '#525252',
    },
    gray_4: {
      default: '#404040 ',
      _dark: '#737373',
    },
    gray_5: {
      default: '#262626',
      _dark: '#a3a3a3 ',
    },
  },
};

export const theme = extendTheme({ semanticTokens, config });
