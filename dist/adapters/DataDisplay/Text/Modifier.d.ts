/// <reference types="react" />
import { TypographyProps as MUITextProps } from '@mui/material/Typography';
import { ColorVariant, TextDecoration, FontWeight } from '../../Customization/Theming/Typographies';
declare type ModifierInternalProps = {
    weight?: FontWeight;
    color?: ColorVariant;
    decoration?: TextDecoration;
};
export declare type ModifierProps = {
    children: MUITextProps['children'];
};
export declare function Modifier({ weight, decoration, color, ...props }: ModifierInternalProps): JSX.Element;
export {};
//# sourceMappingURL=Modifier.d.ts.map