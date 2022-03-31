/// <reference types="react" />
import { LinearProgressProps as MUILinearProgressProps } from '@mui/material/LinearProgress';
export declare type LinearProgressInternalProps = {
    style?: MUILinearProgressProps['style'];
};
export declare type LinearProgressProps = {
    value?: MUILinearProgressProps['value'];
    valueBuffer?: MUILinearProgressProps['valueBuffer'];
    variant?: MUILinearProgressProps['variant'];
    color?: MUILinearProgressProps['color'];
    className?: string;
};
export declare function LinearProgress({ className, ...props }: LinearProgressProps & LinearProgressInternalProps): JSX.Element;
//# sourceMappingURL=LinearProgress.d.ts.map