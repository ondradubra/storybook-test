import { PALETTES } from './Palettes';
import { BREAKPOINTS } from './Breakpoints';
import { CustomTypography, TYPOGRAPHIES } from './Typographies';

type CustomTheme = CustomTypography & object;

const DEFAULT: CustomTheme = {
  ...PALETTES.DEFAULT,
  ...BREAKPOINTS,
  ...TYPOGRAPHIES.DEFAULT
};

export const THEMES = { default: DEFAULT };
