import { ReactNode } from 'react';
import { Block } from '../../../adapters/Surfaces/Box';

import '../../../styles/freestyle.style.scss';

export type FreestyleProps = {
  children: ReactNode | ReactNode[],
  className?: string
};

/**
 * Freestyle should be used as a wrapper for uniqe content that
 * is not meant to be reusable.
 */
export function Freestyle({ children, className = '' }: FreestyleProps) {
  return <Block className={`Freestyle ${className}`}>{children}</Block>;
}
