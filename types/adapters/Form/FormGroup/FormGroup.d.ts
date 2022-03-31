import { FormGroupProps as MUIFormGroupProps } from '@mui/material/FormGroup';
export declare type FormGroupProps = {
    children: MUIFormGroupProps['children'];
    row?: MUIFormGroupProps['row'];
};
export declare function FormGroup({ children, ...props }: FormGroupProps): any;
