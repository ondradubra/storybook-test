import MUIList, { ListProps as MUIListProps } from '@mui/material/List';

export type ListProps = {
  children: MUIListProps['children'],
  className?: string,
  dense?: MUIListProps['dense'],
  subheader?: MUIListProps['subheader']
};

export function List({
  children,
  dense = false,
  className = '',
  ...props
}: ListProps): JSX.Element {
  return (
    <MUIList dense={dense} className={className} {...props}>
      {children}
    </MUIList>
  );
}
