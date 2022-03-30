import { ReactNode, useEffect } from 'react';

import MUIThemeProvider from '@mui/material/styles/ThemeProvider';
import { createTheme, Theme } from '@mui/material/styles';

import { THEMES } from './Themes';

type ThemeName = 'default';

type ThemeOptions = object; // Update this type to be more concrete

export type ThemeProviderProps = {
  children: ReactNode,
  themeName?: ThemeName
};

function getThemeOptions(themeName: ThemeName): ThemeOptions {
  return THEMES[themeName];
}

function getMUITheme(themeOptions: ThemeOptions): Theme {
  return createTheme(themeOptions);
}

function setGlobalColorScheme(theme: any) {
  const cssVariablesElement = document.getElementById('css-variables');
  if (cssVariablesElement) {
    let colorVariables = '';
    Object.entries(theme.palette).forEach(([key, value]) => {
      if (value && typeof value === 'object') {
        Object.entries(value).forEach(([colorKey, colorValue]) => {
          return (colorVariables = `${colorVariables} --color-${key}${
            colorKey !== 'main' ? `-${colorKey}` : ''
          }: ${colorValue};`);
        });
      }
    });
    cssVariablesElement.innerHTML = `
    :root {
      ${colorVariables}
    }`;
  }
}

export function ThemeProvider({
  children,
  themeName = 'default'
}: ThemeProviderProps) {
  const themeOptions = getThemeOptions(themeName);
  const MUITheme = getMUITheme(themeOptions);

  useEffect(() => {
    setGlobalColorScheme(MUITheme);
  }, [MUITheme]);

  return <MUIThemeProvider theme={MUITheme}>{children}</MUIThemeProvider>;
}
