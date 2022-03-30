import MUIListItemText, {
  ListItemTextProps as MUIListItemTextProps
} from '@mui/material/ListItemText';

export type ListItemTextProps = {
  className?: string,
  primary?: MUIListItemTextProps['primary'],
  secondary?: MUIListItemTextProps['secondary']
};

export function ListItemText({
  className = '',
  ...props
}: ListItemTextProps): JSX.Element {
  return <MUIListItemText className={className} {...props} />;
}
