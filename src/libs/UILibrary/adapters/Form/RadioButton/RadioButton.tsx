import MUIRadio, { RadioProps as MUIRadioProps } from '@mui/material/Radio';

import './RadioButton.style.scss';

type RadioButtonInternalProps = {
  className?: MUIRadioProps['className']
};

export type RadioButtonProps = {
  checked?: MUIRadioProps['checked'],
  disabled?: MUIRadioProps['disabled']
};

export function RadioButton({
  disabled = false,
  className = '',
  ...props
}: RadioButtonInternalProps & RadioButtonProps) {
  return (
    <MUIRadio
      disabled={disabled}
      className={`RadioButton ${className}`}
      classes={{
        checked: 'RadioButton--checked',
        disabled: 'RadioButton--disabled'
      }}
      disableRipple
      {...props}
    />
  );
}
