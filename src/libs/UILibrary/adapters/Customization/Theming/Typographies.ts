import { TypographyVariants } from '@mui/material';

export type HeadingFontSize = 'labelTitle' | 'subtitle' | 'title';
export type TextBlockFontSize = 'xs' | 'sm' | 'md' | 'lg';
export type FontSize = HeadingFontSize | TextBlockFontSize;

export type HeadingFontWeight = 'semibold' | 'bold';
export type FontWeight = 'regular' | HeadingFontWeight;

export type TextDecoration = 'underline' | 'strikethrough';
export type ColorVariant =
  | 'text' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'error-light' | 'info'
  | 'green-variant4' | 'gray-variant1' | 'gray-variant2' | 'gray-variant3' | 'gray-variant4'
  | 'gray-variant5' | 'teal-variant2';

interface CustomTypographyProps {
  custom: {
    fontSize: Record<FontSize, string>,
    textDecoration: Record<TextDecoration, { textDecoration: string }>,
  };
}

export interface CustomTypography {
  typography: CustomTypographyProps & Partial<TypographyVariants>;
}

declare module '@mui/material/styles' {
  // eslint-disable-next-line prettier/prettier
  interface TypographyVariants extends CustomTypographyProps {
  }
}

const DEFAULT: CustomTypography = {
  typography: {
    fontFamily: 'Open Sans',
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    custom: {
      fontSize: {
        title: '24px',
        subtitle: '20px',
        labelTitle: '16px',
        lg: '16px',
        md: '14px',
        sm: '12px',
        xs: '10px'
      },
      textDecoration: {
        underline: { textDecoration: 'underline' },
        strikethrough: { textDecoration: 'line-through' }
      }
    },
    button: { fontFamily: 'Open Sans', textTransform: 'none', fontWeight: 600 }
  }
};

export const TYPOGRAPHIES = { DEFAULT };
