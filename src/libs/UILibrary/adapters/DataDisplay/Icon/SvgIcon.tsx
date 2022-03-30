import { FunctionComponent } from 'react';

import MUISvgIcon, {
  SvgIconProps as MUISvgIconProps
} from '@mui/material/SvgIcon';

type SvgIconInternalProps = {
  component?: FunctionComponent | 'svg'
};

export type SvgIconProps = {
  fontSize?: MUISvgIconProps['fontSize'],
  viewBox?: MUISvgIconProps['viewBox'],
  className?: string,
  children?: MUISvgIconProps['children']
};

export function SvgIcon({
  component = 'svg',
  children,
  ...props
}: SvgIconInternalProps & SvgIconProps): JSX.Element {
  return (
    <MUISvgIcon component={component} {...props}>
      {children}
    </MUISvgIcon>
  );
}
