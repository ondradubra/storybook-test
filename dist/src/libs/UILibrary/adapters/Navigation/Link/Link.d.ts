/// <reference types="react" />
import './Link.style.scss';
import { LinkProps as MUILinkProps } from '@mui/material/Link';
declare type LinkInternalProps = {
    variant?: MUILinkProps['variant'];
    component?: string;
    color?: MUILinkProps['color'];
};
export declare type LinkProps = {
    className?: string;
    children: MUILinkProps['children'];
    onClick: MUILinkProps['onClick'];
    size?: 'xs' | 'sm' | 'md';
    disabled?: boolean;
};
export declare function Link({ className, size, disabled, ...props }: LinkInternalProps & LinkProps): JSX.Element;
export {};
//# sourceMappingURL=Link.d.ts.map