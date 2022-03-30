import MUICircularProgress, {
  CircularProgressProps as MUICircularProgressProps
} from '@mui/material/CircularProgress';

export type CircularProgressAdapterProps = {
  value?: MUICircularProgressProps['value'],
  thickness?: MUICircularProgressProps['thickness'],
  size?: MUICircularProgressProps['size'],
  variant?: MUICircularProgressProps['variant'],
  color?: MUICircularProgressProps['color'],
  className?: string
};

function CircularProgress({
  className = '',
  ...props
}: CircularProgressAdapterProps) {
  return (
    <MUICircularProgress
      className={`CircularProgress ${className}`}
      {...props}
    />
  );
}

export { CircularProgress };
