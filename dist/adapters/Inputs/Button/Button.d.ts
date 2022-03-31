import './Button.style.scss';
import { ForwardedRef, ReactNode } from 'react';
import { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { BaseInputTypes } from '../../../components/minerals/BaseInputTypes';
export declare type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export declare type PropsByButtonVariant = {
    color?: MUIButtonProps['color'];
    variant?: MUIButtonProps['variant'];
};
declare type ButtonInternalProps = PropsByButtonVariant & {
    innerRef: ForwardedRef<HTMLButtonElement>;
};
export declare type ButtonProps = {
    children: string;
    onClick: BaseInputTypes['onClick'];
    className?: string;
    disabled?: MUIButtonProps['disabled'];
    size?: MUIButtonProps['size'];
    icon?: ReactNode | string | undefined;
};
export declare function Button({ innerRef, icon, className, ...props }: ButtonInternalProps & ButtonProps): JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map