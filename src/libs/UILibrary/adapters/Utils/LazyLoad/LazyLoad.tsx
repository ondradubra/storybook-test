/**
 * @url https://github.com/twobin/react-lazyload
 */

import ReactLazyLoad from 'react-lazyload';
import type { LazyLoadProps as ReactLazyLoadProps } from 'react-lazyload';

export type LazyLoadProps = ReactLazyLoadProps;

export function LazyLoad(props: LazyLoadProps) {
  return <ReactLazyLoad {...props} />;
}
