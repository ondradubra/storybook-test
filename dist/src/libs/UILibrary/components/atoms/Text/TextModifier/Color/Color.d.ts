/// <reference types="react" />
import { ModifierProps } from '../../../../../adapters/DataDisplay/Text';
import { ColorVariant } from '../../../../../adapters/Customization/Theming/Typographies';
export declare type ColorProps = ModifierProps & {
    variant: ColorVariant;
};
export declare function Color({ variant, ...props }: ColorProps): JSX.Element;
//# sourceMappingURL=Color.d.ts.map