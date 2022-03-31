import { TypographyVariants } from '@mui/material';
export declare type HeadingFontSize = 'labelTitle' | 'subtitle' | 'title';
export declare type TextBlockFontSize = 'xs' | 'sm' | 'md' | 'lg';
export declare type FontSize = HeadingFontSize | TextBlockFontSize;
export declare type HeadingFontWeight = 'semibold' | 'bold';
export declare type FontWeight = 'regular' | HeadingFontWeight;
export declare type TextDecoration = 'underline' | 'strikethrough';
export declare type ColorVariant = 'text' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'error-light' | 'info' | 'green-variant4' | 'gray-variant1' | 'gray-variant2' | 'gray-variant3' | 'gray-variant4' | 'gray-variant5' | 'teal-variant2';
interface CustomTypographyProps {
    custom: {
        fontSize: Record<FontSize, string>;
        textDecoration: Record<TextDecoration, {
            textDecoration: string;
        }>;
    };
}
export interface CustomTypography {
    typography: CustomTypographyProps & Partial<TypographyVariants>;
}
declare module '@mui/material/styles' {
    interface TypographyVariants extends CustomTypographyProps {
    }
}
export declare const TYPOGRAPHIES: {
    DEFAULT: CustomTypography;
};
export {};
