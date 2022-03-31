import { ReactNode } from 'react';
declare type ThemeName = 'default';
export declare type ThemeProviderProps = {
    children: ReactNode;
    themeName?: ThemeName;
};
export declare function ThemeProvider({ children, themeName }: ThemeProviderProps): any;
export {};
