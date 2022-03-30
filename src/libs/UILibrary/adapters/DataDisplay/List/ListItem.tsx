import MUIListItem, {
  ListItemProps as MUIListItemProps
} from '@mui/material/ListItem';

export type ListItemProps = {
  children: MUIListItemProps['children'],
  className?: string,
  dense?: MUIListItemProps['dense'],
  secondaryAction?: MUIListItemProps['secondaryAction']
};

export function ListItem({
  children,
  className = '',
  dense = false,
  ...props
}: ListItemProps): JSX.Element {
  return (
    <MUIListItem className={className} dense={dense} {...props}>
      {children}
    </MUIListItem>
  );
}
