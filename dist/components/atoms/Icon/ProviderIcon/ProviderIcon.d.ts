/// <reference types="react" />
import { SvgIconProps } from '../../../../adapters/DataDisplay/Icon';
export declare type ProviderType = 'facebook' | 'adwords' | 'google';
declare type ProviderIconProps = {
    provider: ProviderType;
    isGrayscale?: boolean;
    className?: string;
};
export declare function ProviderIcon({ provider, isGrayscale, ...props }: SvgIconProps & ProviderIconProps): JSX.Element;
export {};
//# sourceMappingURL=ProviderIcon.d.ts.map