/// <reference types="react" />
import { TextBlockFontSize } from '../../../../adapters/Customization/Theming/Typographies';
import { TextProps } from '../../../../adapters/DataDisplay/Text';
import './TextBlock.style.scss';
export declare type TextBlockProps = Omit<TextProps, 'size'> & {
    size?: TextBlockFontSize;
};
export declare function TextBlock({ size, weight, className, ...props }: TextBlockProps): JSX.Element;
//# sourceMappingURL=TextBlock.d.ts.map