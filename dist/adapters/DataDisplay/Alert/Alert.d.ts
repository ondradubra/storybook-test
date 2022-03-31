/// <reference types="react" />
import { AlertColor } from '@mui/material';
import { AlertProps as MUIAlertProps } from '@mui/material/Alert';
import './Alert.style.scss';
export declare type IconMapping = Record<AlertColor, JSX.Element>;
declare type AlertPropsInternal = {
    iconMapping: IconMapping;
    icon?: JSX.Element;
    action?: MUIAlertProps['action'];
    className?: string;
};
export declare type AlertProps = {
    children: MUIAlertProps['children'];
    variant?: AlertColor;
};
export declare function Alert({ className, variant, ...props }: AlertPropsInternal & AlertProps): JSX.Element;
export {};
//# sourceMappingURL=Alert.d.ts.map