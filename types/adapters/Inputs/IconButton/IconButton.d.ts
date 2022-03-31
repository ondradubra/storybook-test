import { ForwardedRef, ReactElement } from 'react';
import { IconButtonProps as MUIIconButtonProps } from '@mui/material/IconButton';
import { BaseInputTypes } from '../../../components/minerals/BaseInputTypes';
declare type IconButtonInternalProps = {
    innerRef: ForwardedRef<HTMLButtonElement>;
    children: MUIIconButtonProps['children'];
    color?: MUIIconButtonProps['color'];
    sx?: MUIIconButtonProps['sx'];
};
export declare type IconButtonProps = {
    variant: 'secondary' | 'tertiary' | 'naked';
    className?: string;
    onClick: BaseInputTypes['onClick'];
    disabled?: boolean;
};
export declare function IconButton({ innerRef, children, variant, className, disabled, ...props }: IconButtonInternalProps & IconButtonProps): ReactElement<any, any>;
export {};
