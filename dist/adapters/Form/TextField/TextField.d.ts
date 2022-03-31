/// <reference types="react" />
import { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';
export declare type TextFieldProps = {
    variant?: MUITextFieldProps['variant'];
    value?: MUITextFieldProps['value'];
    defaultValue?: MUITextFieldProps['defaultValue'];
    onChange: MUITextFieldProps['onChange'];
    label?: MUITextFieldProps['label'];
    helperText?: MUITextFieldProps['helperText'];
    className?: MUITextFieldProps['className'];
    disabled?: MUITextFieldProps['disabled'];
    size?: MUITextFieldProps['size'];
    error?: MUITextFieldProps['error'];
    InputProps?: MUITextFieldProps['InputProps'];
    inputProps?: MUITextFieldProps['inputProps'];
    placeholder?: MUITextFieldProps['placeholder'];
    fullWidth?: MUITextFieldProps['fullWidth'];
};
export declare function TextField({ variant, value, defaultValue, helperText, label, className, size, disabled, error, InputProps, fullWidth, ...props }: MUITextFieldProps): JSX.Element;
//# sourceMappingURL=TextField.d.ts.map