/// <reference types="react" />
import { ButtonProps, ButtonVariant } from '../../../../adapters/Inputs/Button/Button';
import { IconProps } from '../../Icon';
import './Button.style.scss';
export declare type ButtonExtendedProps = ButtonProps & {
    variant: ButtonVariant;
};
export declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & {
    variant: ButtonVariant;
} & Partial<IconProps> & import("react").RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map