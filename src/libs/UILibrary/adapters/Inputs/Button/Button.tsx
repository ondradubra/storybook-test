import './Button.style.scss';
import { ForwardedRef, ReactNode } from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';

import { BaseInputTypes } from '../../../components/minerals/BaseInputTypes';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export type PropsByButtonVariant = {
  color?: MUIButtonProps['color'],
  variant?: MUIButtonProps['variant']
};

type ButtonInternalProps = PropsByButtonVariant & {
  innerRef: ForwardedRef<HTMLButtonElement>
};

export type ButtonProps = {
  children: string,
  onClick: BaseInputTypes['onClick'],
  className?: string,
  disabled?: MUIButtonProps['disabled'],
  size?: MUIButtonProps['size'],
  icon?: ReactNode | string | undefined
};

export function Button({
  innerRef,
  icon,
  className = '',
  ...props
}: ButtonInternalProps & ButtonProps): JSX.Element {
  return (
    <MUIButton
      ref={innerRef}
      className={`Button ${className}`}
      startIcon={icon}
      classes={{ disabled: 'Button--disabled' }}
      {...props}
    />
  );
}
