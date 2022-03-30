import { useTheme } from '@mui/material';
import MUIText, {
  TypographyProps as MUITextProps
} from '@mui/material/Typography';

import {
  ColorVariant,
  TextDecoration,
  FontWeight
} from '../../Customization/Theming/Typographies';

type ModifierInternalProps = {
  weight?: FontWeight,
  color?: ColorVariant,
  decoration?: TextDecoration
};

export type ModifierProps = {
  children: MUITextProps['children']
};

export function Modifier({
  weight,
  decoration,
  color,
  ...props
}: ModifierInternalProps): JSX.Element {
  const customTypographyTheme = useTheme().typography.custom;

  const decorationStyle = decoration
    ? customTypographyTheme.textDecoration[decoration]
    : {};

  return (
    <MUIText
      variant="inherit"
      component="span"
      fontWeight={weight}
      className="TextModifier"
      style={{
        ...decorationStyle
      }}
      color={`${color}.main`}
      {...props}
    />
  );
}
