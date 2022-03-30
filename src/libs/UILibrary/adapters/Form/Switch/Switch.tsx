import MUISwitch, { SwitchProps as MUISwitchProps } from '@mui/material/Switch';

import './Switch.style.scss';

type SwitchInternalProps = {
  className?: MUISwitchProps['className']
};

export type SwitchProps = {
  checked?: MUISwitchProps['checked'],
  disabled?: MUISwitchProps['disabled']
};

export function Switch({
  className = '',
  ...props
}: SwitchInternalProps & SwitchProps) {
  return (
    <MUISwitch
      className={`Switch ${className}`}
      classes={{
        checked: 'Switch--checked',
        disabled: 'Switch--disabled',
        switchBase: 'Switch__base',
        thumb: 'Switch__thumb',
        track: 'Switch__track'
      }}
      disableRipple
      {...props}
    />
  );
}
