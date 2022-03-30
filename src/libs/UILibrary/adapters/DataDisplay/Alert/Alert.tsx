import { AlertColor } from '@mui/material';
import MUIAlert, { AlertProps as MUIAlertProps } from '@mui/material/Alert';

import './Alert.style.scss';

export type IconMapping = Record<AlertColor, JSX.Element>;

type AlertPropsInternal = {
  iconMapping: IconMapping,
  icon?: JSX.Element,
  action?: MUIAlertProps['action'],
  className?: string
};

export type AlertProps = {
  children: MUIAlertProps['children'],
  variant?: AlertColor
};

export function Alert({
  className,
  variant = 'success',
  ...props
}: AlertPropsInternal & AlertProps): JSX.Element {
  return (
    <MUIAlert
      severity={variant}
      classes={{ action: 'Alert__action', icon: 'Alert__icon' }}
      className={`Alert Alert--${variant} ${className}`}
      {...props}
    />
  );
}
