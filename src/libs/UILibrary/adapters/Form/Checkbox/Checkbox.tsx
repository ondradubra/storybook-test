import MUICheckbox, {
  CheckboxProps as MUICheckboxProps
} from '@mui/material/Checkbox';

import './Checkbox.style.scss';

type CheckboxInternalProps = {
  className?: MUICheckboxProps['className']
};

export type CheckboxProps = {
  checked?: MUICheckboxProps['checked'],
  disabled?: MUICheckboxProps['disabled']
};

export function Checkbox({
  className = '',
  ...props
}: CheckboxInternalProps & CheckboxProps) {
  return (
    <MUICheckbox
      className={`Checkbox ${className}`}
      classes={{ checked: 'Checkbox--checked', disabled: 'Checkbox--disabled' }}
      disableRipple
      {...props}
    />
  );
}
