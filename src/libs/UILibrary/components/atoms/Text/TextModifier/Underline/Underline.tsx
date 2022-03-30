import { Text } from '../../../../../adapters/DataDisplay/Text';
import { ModifierProps } from '../../../../../adapters/DataDisplay/Text';

export function Underline(props: ModifierProps): JSX.Element {
  return <Text.Modifier decoration="underline" {...props} />;
}
