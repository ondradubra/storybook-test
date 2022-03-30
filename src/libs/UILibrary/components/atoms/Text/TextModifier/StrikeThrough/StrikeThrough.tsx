import { Text } from '../../../../../adapters/DataDisplay/Text';
import { ModifierProps } from '../../../../../adapters/DataDisplay/Text';

export function StrikeThrough(props: ModifierProps): JSX.Element {
  return <Text.Modifier decoration="strikethrough" {...props} />;
}
