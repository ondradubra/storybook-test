import React from 'react';
import { ReactNode, CSSProperties } from 'react';

type BlockProps = {
  children?: ReactNode,
  className?: string,
  style?: CSSProperties
};

export const Block = React.forwardRef<any, BlockProps>(
  ({ children, className, ...props }, ref) => (
    <div className={`Block ${className}`} {...props} ref={ref}>
      {children}
    </div>
  )
);
