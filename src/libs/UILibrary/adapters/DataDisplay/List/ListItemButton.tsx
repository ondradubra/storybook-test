import MUIListItemButton, {
  ListItemButtonProps as MUIListItemButtonProps
} from '@mui/material/ListItemButton';

import './List.styles.scss';

export type ListItemButtonProps = {
  children: MUIListItemButtonProps['children'],
  className?: string,
  dense?: MUIListItemButtonProps['dense'],
  disabled?: MUIListItemButtonProps['disabled'],
  selected?: MUIListItemButtonProps['selected'],
  onClick?: MUIListItemButtonProps['onClick']
};

export function ListItemButton({
  children,
  dense = false,
  className = '',
  disabled = false,
  selected = false,
  onClick,
  ...props
}: ListItemButtonProps): JSX.Element {
  return (
    <MUIListItemButton
      dense={dense}
      className={`ListItemButton ${className}`}
      disabled={disabled}
      selected={selected}
      onClick={onClick}
      {...props}>
      {children}
    </MUIListItemButton>
  );
}
