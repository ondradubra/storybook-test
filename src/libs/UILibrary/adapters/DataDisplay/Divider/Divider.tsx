import MUIDivider from '@mui/material/Divider';

export type DividerProps = {
  className?: string
};

export function Divider({
  className = '',
  ...props
}: DividerProps): JSX.Element {
  return <MUIDivider className={className} {...props} />;
}
