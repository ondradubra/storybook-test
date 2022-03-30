import MUICardActions, {
  CardActionsProps as MUICardActionsProps
} from '@mui/material/CardActions';

export type CardActionsProps = {
  children: MUICardActionsProps['children'],
  className?: string
};

export function CardActions({
  className = '',
  children,
  ...props
}: CardActionsProps): JSX.Element {
  return (
    <MUICardActions className={className} {...props}>
      {children}
    </MUICardActions>
  );
}
