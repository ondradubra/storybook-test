import './Title.style.scss';
import { HeadingProps, Text } from '../../../../adapters/DataDisplay/Text';

export function Title({
  weight = 'bold',
  className = '',
  ...props
}: HeadingProps): JSX.Element {
  return (
    <Text
      size="title"
      weight={weight}
      className={`Title ${className}`}
      {...props}
    />
  );
}
