import { CircularProgressProps as MUICircularProgressProps } from '@mui/material/CircularProgress';
export declare type CircularProgressAdapterProps = {
    value?: MUICircularProgressProps['value'];
    thickness?: MUICircularProgressProps['thickness'];
    size?: MUICircularProgressProps['size'];
    variant?: MUICircularProgressProps['variant'];
    color?: MUICircularProgressProps['color'];
    className?: string;
};
declare function CircularProgress({ className, ...props }: CircularProgressAdapterProps): any;
export { CircularProgress };
