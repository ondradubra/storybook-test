import MUICard, { CardProps as MUICardProps } from '@mui/material/Card';

export type CardProps = {
  children: MUICardProps['children'],
  variant?: MUICardProps['variant'],
  className?: string
};

export function Card({
  children,
  variant,
  className = '',
  ...props
}: CardProps): JSX.Element {
  return (
    <MUICard className={`Card ${className}`} variant={variant} {...props}>
      {children}
    </MUICard>
  );
}
