import { forwardRef } from 'react';
import {
  Button as ButtonAdapter,
  ButtonProps
} from '../../../../adapters/Inputs/Button/Button';

import { Icon } from '../../Icon';

import './RemoveButton.style.scss';

export const RemoveButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, ...props }, ref): JSX.Element => {
    return (
      <ButtonAdapter
        innerRef={ref}
        variant="contained"
        disabled={disabled}
        icon={<Icon icon="trash" />}
        {...props}
        className={`RemoveButton ${disabled ? 'RemoveButton__disabled' : ''}`}
      />
    );
  }
);
