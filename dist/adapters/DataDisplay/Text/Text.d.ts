/// <reference types="react" />
import { TypographyProps as MUITextProps } from '@mui/material/Typography';
import { FontSize, FontWeight, HeadingFontWeight } from '../../Customization/Theming/Typographies';
declare type TextInternalProps = {
    size: FontSize;
};
export declare type TextProps = {
    children: MUITextProps['children'];
    align?: MUITextProps['align'];
    inline?: boolean;
    weight?: FontWeight;
    className?: string;
};
export declare type HeadingProps = TextProps & {
    weight?: HeadingFontWeight;
};
export declare function Text({ className, inline, weight, size, ...props }: TextInternalProps & TextProps): JSX.Element;
export declare namespace Text {
    var Modifier: typeof import("./Modifier").Modifier;
}
export {};
//# sourceMappingURL=Text.d.ts.map