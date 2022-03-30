import { HeadingProps, Text } from '../../../../adapters/DataDisplay/Text';

import './Subtitle.style.scss';

export function Subtitle({
  weight = 'bold',
  ...props
}: HeadingProps): JSX.Element {
  return (
    <Text size="subtitle" weight={weight} className="Subtitle" {...props} />
  );
}
