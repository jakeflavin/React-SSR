/* eslint-disable no-trailing-spaces */
const colors = {
  white: '#ffffff',
  off_white: '#f7f7f7',
  gray_white: '#e7e7e7',
  black: '#000000',
  off_black: '#242424',
  gray_black: '#393939',
  indigo: '#6610f2',
  purple: '#6f42c1',
  blue: '#007bff',
  red: '#dc3545',
  dark_red: '#9a2433',
  pink: '#e83e8c',
  orange: '#fd7e14',
  yellow: '#ffc107',
  gold: '#ffb500',
  green: '#28a745',
  dark_green: '#207a3a',
  teal: '#20c997',
  cyan: '#17a2b8',
  gray: '#777777',
  dark_gray: '#505050'
};

const breakPoints = {
  xs: '0px',
  sm: '400px',
  md: '800px',
  lg: '1200px',
  xl: '1600px'
};

const light = {
  primary: colors.green,
  secondary: colors.red,
  neutral: colors.gray,

  success: colors.green,
  info: colors.cyan,
  warning: colors.yellow,
  danger: colors.red,

  background_0: colors.white,
  background_1: colors.white,
  background_2: colors.off_white,

  fontColor: colors.black,
  breakPoints
};

const dark = {
  primary: colors.dark_green,
  secondary: colors.dark_red,
  neutral: colors.dark_gray,

  success: colors.green,
  info: colors.cyan,
  warning: colors.yellow,
  danger: colors.red,

  background_0: colors.black,
  background_1: colors.off_black,
  background_2: colors.gray_black,

  fontColor: colors.gray_white,
  breakPoints
};

export default { dark, light };
