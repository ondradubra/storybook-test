import MUIRadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';

export type RadioButtonGroupProps = {
  children: RadioGroupProps['children'],
  defaultValue?: RadioGroupProps['defaultValue'],
  defaultChecked?: RadioGroupProps['defaultChecked'],
  name?: RadioGroupProps['name'],
  onChange?: RadioGroupProps['onChange'],
  className?: RadioGroupProps['className']
};

export function RadioButtonGroup(props: RadioButtonGroupProps) {
  return <MUIRadioGroup {...props} />;
}
