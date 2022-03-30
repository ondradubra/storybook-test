import MUIListSubheader, {
  ListSubheaderProps as MUIListSubheaderProps
} from '@mui/material/ListSubheader';

export type ListSubheaderProps = {
  children: MUIListSubheaderProps['children'],
  className?: string
};

export function ListSubheader({
  children,
  className = '',
  ...props
}: ListSubheaderProps): JSX.Element {
  return (
    <MUIListSubheader className={className} {...props}>
      {children}
    </MUIListSubheader>
  );
}
