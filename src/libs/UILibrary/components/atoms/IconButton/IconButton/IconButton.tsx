import { forwardRef } from 'react';
import {
  IconButton as IconButtonAdapter,
  IconButtonProps as IconButtonAdapterProps
} from '../../../../adapters/Inputs/IconButton';

import { Icon, IconProps } from '../../Icon';

import './IconButton.style.scss';

export type IconButtonProps = IconButtonAdapterProps & IconProps;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { variant, icon, iconVariant, className = '', ...props },
    ref
  ): JSX.Element => {
    const iconButtonClass = `IconButton--${variant}`;
    return (
      <IconButtonAdapter
        innerRef={ref}
        color="primary"
        variant={variant}
        className={`${className} ${iconButtonClass}`}
        {...props}>
        <Icon icon={icon} iconVariant={iconVariant} />
      </IconButtonAdapter>
    );
  }
);
