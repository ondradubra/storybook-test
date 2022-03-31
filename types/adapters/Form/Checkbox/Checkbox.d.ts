import { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';
import './Checkbox.style.scss';
declare type CheckboxInternalProps = {
    className?: MUICheckboxProps['className'];
};
export declare type CheckboxProps = {
    checked?: MUICheckboxProps['checked'];
    disabled?: MUICheckboxProps['disabled'];
};
export declare function Checkbox({ className, ...props }: CheckboxInternalProps & CheckboxProps): any;
export {};
