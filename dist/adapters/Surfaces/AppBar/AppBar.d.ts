/// <reference types="react" />
import { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';
export declare type AppBarProps = {
    children: MUIAppBarProps['children'];
    position?: MUIAppBarProps['position'];
    color?: MUIAppBarProps['color'];
    className?: string;
};
export declare function AppBar({ className, ...props }: AppBarProps): JSX.Element;
//# sourceMappingURL=AppBar.d.ts.map