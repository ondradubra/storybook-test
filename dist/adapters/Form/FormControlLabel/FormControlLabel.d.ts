/// <reference types="react" />
import { FormControlLabelProps as MUIFormControlLabelProps } from '@mui/material/FormControlLabel';
import './FormControlLabel.style.scss';
declare type FormControlLabelInternalProps = {
    control: MUIFormControlLabelProps['control'];
};
export declare type FormControlLabelProps = {
    className?: MUIFormControlLabelProps['className'];
    label: MUIFormControlLabelProps['label'];
    checked?: MUIFormControlLabelProps['checked'];
    disabled?: MUIFormControlLabelProps['disabled'];
    value?: MUIFormControlLabelProps['value'];
    onChange?: MUIFormControlLabelProps['onChange'];
};
export declare function FormControlLabel({ label, className, ...props }: FormControlLabelInternalProps & FormControlLabelProps): JSX.Element;
export {};
//# sourceMappingURL=FormControlLabel.d.ts.map