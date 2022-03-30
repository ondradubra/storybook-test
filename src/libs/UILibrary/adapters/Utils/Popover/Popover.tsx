import MUIPopover, {
  PopoverProps as MUIPopoverProps
} from '@mui/material/Popover';

export type PopoverProps = {
  children: MUIPopoverProps['children'],
  open: MUIPopoverProps['open'],
  anchorEl?: MUIPopoverProps['anchorEl'],
  onClose?: MUIPopoverProps['onClose'],
  className?: string,
  anchorOrigin?: MUIPopoverProps['anchorOrigin'],
  transformOrigin?: MUIPopoverProps['transformOrigin']
};

export function Popover({
  children,
  className = '',
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  ...props
}: PopoverProps): JSX.Element {
  return (
    <MUIPopover
      className={className}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      {...props}>
      {children}
    </MUIPopover>
  );
}
