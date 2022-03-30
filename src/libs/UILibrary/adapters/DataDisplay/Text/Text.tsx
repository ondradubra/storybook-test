import { useTheme } from '@mui/material';
import MUIText, {
  TypographyProps as MUITextProps
} from '@mui/material/Typography';
import {
  FontSize,
  FontWeight,
  HeadingFontWeight
} from '../../Customization/Theming/Typographies';
import { Modifier } from './Modifier';

type TextInternalProps = {
  size: FontSize
};

export type TextProps = {
  children: MUITextProps['children'],
  align?: MUITextProps['align'],
  inline?: boolean,
  weight?: FontWeight,
  className?: string
};

export type HeadingProps = TextProps & {
  weight?: HeadingFontWeight
};

export function Text({
  className = '',
  inline = false,
  weight,
  size,
  ...props
}: TextInternalProps & TextProps): JSX.Element {
  const theme = useTheme();

  const fontSize = theme.typography.custom.fontSize[size];

  return (
    <MUIText
      fontWeight={weight === 'semibold' ? 'medium' : weight}
      className={className}
      fontSize={fontSize}
      component={inline ? 'span' : 'div'}
      color="textPrimary"
      {...props}
    />
  );
}

Text.Modifier = Modifier;
