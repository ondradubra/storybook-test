import MUIAppBar, { AppBarProps as MUIAppBarProps } from '@mui/material/AppBar';

export type AppBarProps = {
  children: MUIAppBarProps['children'],
  position?: MUIAppBarProps['position'],
  color?: MUIAppBarProps['color'],
  className?: string
};

export function AppBar({ className = '', ...props }: AppBarProps) {
  return <MUIAppBar className={className} {...props} />;
}
