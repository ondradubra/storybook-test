import MUICardContent, {
  CardContentProps as MUICardContentProps
} from '@mui/material/CardContent';

export type CardContentProps = {
  children: MUICardContentProps['children'],
  className?: string
};

export function CardContent({
  children,
  className = '',
  ...props
}: CardContentProps): JSX.Element {
  return (
    <MUICardContent className={className} {...props}>
      {children}
    </MUICardContent>
  );
}
