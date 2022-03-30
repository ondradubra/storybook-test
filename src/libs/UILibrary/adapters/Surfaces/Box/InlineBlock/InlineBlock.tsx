import React from 'react';
import { ReactNode, CSSProperties } from 'react';

import './InlineBlock.style.scss';

type InlineBlockProps = {
  children?: ReactNode,
  className?: string,
  style?: CSSProperties
};

export const InlineBlock = React.forwardRef<any, InlineBlockProps>(
  ({ children, className, ...props }, ref) => (
    <div className={`InlineBlock ${className}`} {...props} ref={ref}>
      {children}
    </div>
  )
);
