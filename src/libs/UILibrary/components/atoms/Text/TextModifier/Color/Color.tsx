import { Text } from '../../../../../adapters/DataDisplay/Text';
import { ModifierProps } from '../../../../../adapters/DataDisplay/Text';
import { ColorVariant } from '../../../../../adapters/Customization/Theming/Typographies';

export type ColorProps = ModifierProps & {
  variant: ColorVariant
};

export function Color({ variant, ...props }: ColorProps): JSX.Element {
  return <Text.Modifier color={variant} {...props} />;
}
