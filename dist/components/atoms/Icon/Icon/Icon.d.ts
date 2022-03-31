/// <reference types="react" />
import { IconProps as IconAdapterProps } from '../../../../adapters/DataDisplay/Icon';
export declare type IconProps = {
    icon: string | JSX.Element;
    iconVariant?: 'default' | 'outline' | 'sharp';
};
export declare function Icon({ icon, iconVariant, ...props }: IconAdapterProps & IconProps): JSX.Element;
//# sourceMappingURL=Icon.d.ts.map