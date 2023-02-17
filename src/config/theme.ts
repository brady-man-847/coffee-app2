import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';

const c = {
  orange: {
    900: '#e94b00',
    800: '#f26800',
    700: '#f77900',
    600: '#fc8a00',
    500: '#ff9600',
    400: '#ffa600',
    300: '#ffb640',
    200: '#ffcb78',
    100: '#ffe0ae',
    50: '#fff3de',
  },
  blue: {
    900: '#2a30df',
    800: '#0059ff',
    700: '#006dff',
    600: '#0082ff',
    500: '#0092ff',
    400: '#00a3ff',
    300: '#36b5ff',
    200: '#82caff',
    100: '#b7deff',
    50: '#e1f2ff',
  },
  red: {
    900: '#da0000',
    800: '#f11900',
    700: '#ff2600',
    600: '#ff3007',
    500: '#ff370d',
    400: '#ff5f37',
    300: '#ff805c',
    200: '#ffa68c',
    100: '#ffcab9',
    50: '#ffe8e6',
  },
  yellow: {
    900: '#959300',
    800: '#adbc00',
    700: '#bcd400',
    600: '#cceb00',
    500: '#d9ff00',
    400: '#d7f83d',
    300: '#dffb68',
    200: '#e9fd97',
    100: '#f4fec2',
    50: '#fbffe7',
  },
  green: {
    900: '#00993c',
    800: '#00bc53',
    700: '#00ce5f',
    600: '#00e36e',
    500: '#00f57a',
    400: '#00fb8d',
    300: '#00ffa6',
    200: '#84ffc2',
    100: '#baffda',
    50: '#e3fff0',
  },
};

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: c.orange[400],
      light: c.orange[400],
      dark: c.orange[400],
      contrastText: c.orange[50],
    },
    secondary: {
      main: c.blue[800],
      light: c.blue[800],
      dark: c.blue[800],
      contrastText: c.blue[100],
    },
  },
  typography: {
    fontFamily: 'IBM Plex Sans KR',
  },
});

export default responsiveFontSizes(theme, {
  factor: 1.25,
});
