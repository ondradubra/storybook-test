import MUILinearProgress, {
  LinearProgressProps as MUILinearProgressProps
} from '@mui/material/LinearProgress';

export type LinearProgressInternalProps = {
  style?: MUILinearProgressProps['style']
};

export type LinearProgressProps = {
  value?: MUILinearProgressProps['value'],
  valueBuffer?: MUILinearProgressProps['valueBuffer'],
  variant?: MUILinearProgressProps['variant'],
  color?: MUILinearProgressProps['color'],
  className?: string
};

export function LinearProgress({
  className = '',
  ...props
}: LinearProgressProps & LinearProgressInternalProps): JSX.Element {
  return (
    <MUILinearProgress
      className={className}
      classes={{ bar: 'LinearProgress__bar' }}
      {...props}
    />
  );
}
