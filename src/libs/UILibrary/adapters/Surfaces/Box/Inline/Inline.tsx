import React, { ReactNode, CSSProperties } from 'react';

type InlineProps = {
  children?: ReactNode,
  className?: string,
  style?: CSSProperties
};

export const Inline = React.forwardRef<any, InlineProps>(
  ({ children, className, ...props }, ref) => (
    <span className={`Inline ${className}`} {...props} ref={ref}>
      {children}
    </span>
  )
);
