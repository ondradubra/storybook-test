import { TextBlockFontSize } from '../../../../adapters/Customization/Theming/Typographies';
import { Text, TextProps } from '../../../../adapters/DataDisplay/Text';

import './TextBlock.style.scss';

export type TextBlockProps = Omit<TextProps, 'size'> & {
  size?: TextBlockFontSize
};

export function TextBlock({
  size = 'md',
  weight = 'regular',
  className = '',
  ...props
}: TextBlockProps): JSX.Element {
  return (
    <Text
      weight={weight}
      className={`TextBlock TextBlock--${size} ${className}`}
      size={size}
      {...props}
    />
  );
}
