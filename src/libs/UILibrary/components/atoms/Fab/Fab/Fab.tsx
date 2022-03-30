import { forwardRef } from 'react';
import { Fab as FabAdapter, FabProps } from '../../../../adapters/Inputs/Fab';

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({ size = 'large', ...props }, ref): JSX.Element => (
    <FabAdapter
      innerRef={ref}
      variant="circular"
      color="primary"
      size={size}
      {...props}
    />
  )
);
