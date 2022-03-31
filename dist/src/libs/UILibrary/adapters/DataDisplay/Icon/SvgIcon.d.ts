import { FunctionComponent } from 'react';
import { SvgIconProps as MUISvgIconProps } from '@mui/material/SvgIcon';
declare type SvgIconInternalProps = {
    component?: FunctionComponent | 'svg';
};
export declare type SvgIconProps = {
    fontSize?: MUISvgIconProps['fontSize'];
    viewBox?: MUISvgIconProps['viewBox'];
    className?: string;
    children?: MUISvgIconProps['children'];
};
export declare function SvgIcon({ component, children, ...props }: SvgIconInternalProps & SvgIconProps): JSX.Element;
export {};
//# sourceMappingURL=SvgIcon.d.ts.map