import './LinkButton.style.scss';
import {
  Link as LinkAdapter,
  LinkProps
} from '../../../../adapters/Navigation/Link';

import { Icon, IconProps } from '../../Icon';

type IconPosition = 'start' | 'end';

type LinkButtonProps = LinkProps & {
  iconPosition?: IconPosition,
  disabled?: boolean
};

export function LinkButton({
  children,
  size = 'md',
  icon,
  iconVariant,
  iconPosition = 'start',
  ...props
}: LinkButtonProps & Partial<IconProps>) {
  const iconClassName = icon ? `LinkButton__icon--${iconPosition}` : '';
  const iconComponent = icon ? (
    <Icon
      icon={icon}
      iconVariant={iconVariant}
      size="sm"
      className={iconClassName}
    />
  ) : null;
  return (
    <LinkAdapter
      className={`LinkButton ${iconClassName}`}
      component="button"
      variant="button"
      color="textPrimary"
      size={size}
      {...props}>
      {iconPosition === 'start' && iconComponent}
      {children}
      {iconPosition === 'end' && iconComponent}
    </LinkAdapter>
  );
}
