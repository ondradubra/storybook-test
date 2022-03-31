/// <reference types="react" />
import './Icon.style.scss';
import { IconProps as MUIIconProps } from '@mui/material/Icon';
declare type IconInternalProps = {
    children: MUIIconProps['children'];
};
export declare type IconProps = {
    className?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg';
    color?: MUIIconProps['color'];
};
export declare function Icon({ children, size, color, className, ...props }: IconInternalProps & IconProps): JSX.Element;
export {};
//# sourceMappingURL=Icon.d.ts.map