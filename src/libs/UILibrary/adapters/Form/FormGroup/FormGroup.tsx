import MUIFormGroup, {
  FormGroupProps as MUIFormGroupProps
} from '@mui/material/FormGroup';

export type FormGroupProps = {
  children: MUIFormGroupProps['children'],
  row?: MUIFormGroupProps['row']
};

export function FormGroup({ children, ...props }: FormGroupProps) {
  return <MUIFormGroup {...props}>{children}</MUIFormGroup>;
}
