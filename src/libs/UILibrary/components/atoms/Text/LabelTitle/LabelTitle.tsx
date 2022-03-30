import { Text, HeadingProps } from '../../../../adapters/DataDisplay/Text';

import './LabelTitle.style.scss';

export function LabelTitle({
  weight = 'bold',
  ...props
}: HeadingProps): JSX.Element {
  return (
    <Text size="labelTitle" weight={weight} className="LabelTitle" {...props} />
  );
}
