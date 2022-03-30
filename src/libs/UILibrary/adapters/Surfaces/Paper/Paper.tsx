import MUIPaper, { PaperProps as MUIPaperProps } from '@mui/material/Paper';

type NotBoth =
  | { elevation: MUIPaperProps['elevation'], outlined?: never }
  | { elevation?: never, outlined: boolean }
  | { elevation?: never, outlined?: never };

export type PaperProps = NotBoth & {
  children?: MUIPaperProps['children'],
  square?: MUIPaperProps['square'],
  className?: string
};

export function Paper({
  outlined,
  square = false,
  className = '',
  ...props
}: PaperProps): JSX.Element {
  return (
    <MUIPaper
      className={className}
      variant={outlined ? 'outlined' : 'elevation'}
      {...props}
    />
  );
}
