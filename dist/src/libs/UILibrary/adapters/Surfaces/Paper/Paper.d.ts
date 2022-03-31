/// <reference types="react" />
import { PaperProps as MUIPaperProps } from '@mui/material/Paper';
declare type NotBoth = {
    elevation: MUIPaperProps['elevation'];
    outlined?: never;
} | {
    elevation?: never;
    outlined: boolean;
} | {
    elevation?: never;
    outlined?: never;
};
export declare type PaperProps = NotBoth & {
    children?: MUIPaperProps['children'];
    square?: MUIPaperProps['square'];
    className?: string;
};
export declare function Paper({ outlined, square, className, ...props }: PaperProps): JSX.Element;
export {};
//# sourceMappingURL=Paper.d.ts.map