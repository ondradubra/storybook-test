import { RadioProps as MUIRadioProps } from '@mui/material/Radio';
import './RadioButton.style.scss';
declare type RadioButtonInternalProps = {
    className?: MUIRadioProps['className'];
};
export declare type RadioButtonProps = {
    checked?: MUIRadioProps['checked'];
    disabled?: MUIRadioProps['disabled'];
};
export declare function RadioButton({ disabled, className, ...props }: RadioButtonInternalProps & RadioButtonProps): any;
export {};
