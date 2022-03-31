/// <reference types="react" />
declare type LogoProps = {
    mode: keyof typeof mappedLogos;
    size?: number;
};
declare const mappedLogos: {
    light: any;
    dark: any;
    lightGrayScale: any;
    darkGrayScale: any;
};
export declare const Logo: ({ mode, size, ...props }: LogoProps) => JSX.Element;
export {};
//# sourceMappingURL=Logo.d.ts.map