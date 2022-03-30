import { forwardRef } from 'react';
import {
  Button as ButtonAdapter,
  ButtonProps,
  ButtonVariant,
  PropsByButtonVariant
} from '../../../../adapters/Inputs/Button/Button';

import { Icon, IconProps } from '../../Icon';

import './Button.style.scss';

export type ButtonExtendedProps = ButtonProps & {
  variant: ButtonVariant
};

const propsByButtonVariant = {
  primary: (): PropsByButtonVariant => ({
    color: 'primary',
    variant: 'contained'
  }),
  secondary: (): PropsByButtonVariant => ({
    color: 'primary',
    variant: 'outlined'
  }),
  tertiary: (): PropsByButtonVariant => ({
    variant: 'contained'
  })
};

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonExtendedProps & Partial<IconProps>
>(({ variant, icon, iconVariant, className, ...props }, ref): JSX.Element => {
  const propsByVariant: PropsByButtonVariant = propsByButtonVariant[variant]();
  const iconComponent =
    typeof icon === 'string' ? (
      <Icon icon={icon} iconVariant={iconVariant} />
    ) : (
      icon
    );
  return (
    <ButtonAdapter
      innerRef={ref}
      className={`${className} Button--${variant}`}
      icon={iconComponent}
      {...propsByVariant}
      {...props}
    />
  );
});
