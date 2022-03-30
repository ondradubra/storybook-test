import React from 'react';
import { useTheme } from '@mui/material';

import { FontSize } from '../../../Customization/Theming/Typographies';

export type ListItemProps = Pick<
  React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>,
  'value' | 'children' | 'className'
> & {
  size?: FontSize
};

function ListItem({
  children,
  size = 'md',
  ...props
}: ListItemProps): JSX.Element {
  const theme = useTheme();

  const fontSize = theme.typography.custom.fontSize[size];
  const fontFamily = theme.typography.fontFamily;

  return (
    <li style={{ fontSize, fontFamily }} {...props}>
      {children}
    </li>
  );
}

export { ListItem };
