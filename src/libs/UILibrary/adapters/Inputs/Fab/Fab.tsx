import './Fab.style.scss';

import { ForwardedRef } from 'react';
import MUIFab, { FabProps as MUIFabProps } from '@mui/material/Fab';

import { BaseInputTypes } from '../../../components/minerals/BaseInputTypes';

type FabInternalProps = {
  innerRef: ForwardedRef<HTMLButtonElement>,
  variant?: MUIFabProps['variant'],
  color?: MUIFabProps['color']
};

export type FabProps = {
  children: MUIFabProps['children'],
  onClick: BaseInputTypes['onClick'],
  size?: MUIFabProps['size'],
  disabled?: boolean,
  className?: string
};

export function Fab({
  innerRef,
  className = '',
  ...props
}: FabInternalProps & FabProps): JSX.Element {
  return <MUIFab ref={innerRef} className={`Fab ${className}`} {...props} />;
}
