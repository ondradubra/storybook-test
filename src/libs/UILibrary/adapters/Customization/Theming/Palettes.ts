import {
  BASIC_COLORS,
  INFO_COLORS,
  MAIN_COLORS,
  GRADIENT
} from '../../../foundations';

const basicColors = Object.entries(BASIC_COLORS).reduce(
  (prev, [key, value]) => {
    return {
      ...prev,
      ...Object.entries(value).reduce((prevColor, [colorKey, colorValue]) => {
        return {
          ...prevColor,
          [`${key.toLowerCase()}-${colorKey.toLowerCase()}`]: {
            main: colorValue
          }
        };
      }, {})
    };
  },
  {}
);

const gradients = Object.entries(GRADIENT).reduce((prev, [key, value]) => {
  return {
    ...prev,
    [`gradient-${key.toLowerCase()}`]: {
      main: value
    }
  };
}, {});

const DEFAULT = {
  palette: {
    text: {
      primary: BASIC_COLORS.GRAY.VARIANT5
    },
    primary: {
      main: MAIN_COLORS.PRIMARY1,
      contrastText: BASIC_COLORS.WHITE.VARIANT1
    },
    secondary: {
      main: MAIN_COLORS.PRIMARY2,
      contrastText: BASIC_COLORS.GRAY.VARIANT5,
      dark: BASIC_COLORS.BLUE.VARIANT2
    },
    success: {
      main: INFO_COLORS.SUCCESS.MAIN,
      light: INFO_COLORS.SUCCESS.LIGHT,
      lighter: INFO_COLORS.SUCCESS.LIGHTER,
      dark: INFO_COLORS.SUCCESS.DARK
    },
    warning: {
      main: INFO_COLORS.WARNING.MAIN,
      light: INFO_COLORS.WARNING.LIGHT,
      lighter: INFO_COLORS.WARNING.LIGHTER,
      dark: INFO_COLORS.WARNING.DARK
    },
    error: {
      main: INFO_COLORS.ERROR.MAIN,
      lighter: INFO_COLORS.ERROR.LIGHTER,
      dark: INFO_COLORS.ERROR.DARK
    },
    'error-light': {
      main: INFO_COLORS.ERROR.LIGHT
    },
    info: {
      main: INFO_COLORS.INFO.MAIN,
      light: INFO_COLORS.INFO.LIGHT,
      lighter: INFO_COLORS.INFO.LIGHTER,
      dark: INFO_COLORS.INFO.DARK
    },
    action: {
      disabled: BASIC_COLORS.GRAY.VARIANT3,
      disabledBackground: BASIC_COLORS.GRAY.VARIANT2
    },
    ...basicColors,
    ...gradients
  }
};

export const PALETTES = { DEFAULT };
