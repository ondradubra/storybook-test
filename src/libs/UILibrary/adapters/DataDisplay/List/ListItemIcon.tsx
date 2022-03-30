import MUIListItemIcon, {
  ListItemIconProps as MUIListItemIconProps
} from '@mui/material/ListItemIcon';

export type ListItemIconProps = {
  children: MUIListItemIconProps['children'],
  className?: string
};

export function ListItemIcon({
  children,
  className = '',
  ...props
}: ListItemIconProps): JSX.Element {
  return (
    <MUIListItemIcon className={className} {...props}>
      {children}
    </MUIListItemIcon>
  );
}
