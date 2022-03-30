import MUITextField, {
  TextFieldProps as MUITextFieldProps
} from '@mui/material/TextField';

export type TextFieldProps = {
  variant?: MUITextFieldProps['variant'],
  value?: MUITextFieldProps['value'],
  defaultValue?: MUITextFieldProps['defaultValue'],
  onChange: MUITextFieldProps['onChange'],
  label?: MUITextFieldProps['label'],
  helperText?: MUITextFieldProps['helperText'],
  className?: MUITextFieldProps['className'],
  disabled?: MUITextFieldProps['disabled'],
  size?: MUITextFieldProps['size'],
  error?: MUITextFieldProps['error'],
  InputProps?: MUITextFieldProps['InputProps'],
  inputProps?: MUITextFieldProps['inputProps'],
  placeholder?: MUITextFieldProps['placeholder'],
  fullWidth?: MUITextFieldProps['fullWidth']
};
const classNameByVariant = {
  standard: 'TextField--standard',
  outlined: 'TextField--outlined',
  filled: 'TextField--filled'
};

export function TextField({
  variant = 'standard',
  value,
  defaultValue = null,
  helperText = null,
  label = null,
  className = '',
  size = 'medium',
  disabled = false,
  error = false,
  InputProps = {},
  fullWidth = false,
  ...props
}: MUITextFieldProps) {
  return (
    <MUITextField
      className={`TextField ${className} ${
        disabled ? 'TextField--disabled' : ''
      } ${classNameByVariant[variant]}
       TextField--${size}
      `}
      value={value}
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
      variant={variant}
      error={error}
      fullWidth={fullWidth}
      InputLabelProps={{
        shrink: false,
        className: 'TextField__label',
        classes: {
          focused: 'TextField__label--focused',
          error: 'TextField__label--error'
        }
      }}
      FormHelperTextProps={{ className: 'TextField__helperText' }}
      InputProps={{
        ...InputProps,
        classes: {
          focused: 'TextField__inner--focused',
          error: 'TextField__inner--error'
        },
        className: 'TextField__inner'
      }}
      {...props}
    />
  );
}
