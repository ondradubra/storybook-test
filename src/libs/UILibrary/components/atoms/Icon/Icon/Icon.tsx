import {
  Icon as IconAdapter,
  IconProps as IconAdapterProps
} from '../../../../adapters/DataDisplay/Icon';

export type IconProps = {
  icon: string | JSX.Element,
  iconVariant?: 'default' | 'outline' | 'sharp'
};

const nameByVariant = {
  default: (name: string): string => `${name}`,
  outline: (name: string): string => `${name}-outline`,
  sharp: (name: string): string => `${name}-sharp`
};

export function Icon({
  icon,
  iconVariant = 'default',
  ...props
}: IconAdapterProps & IconProps) {
  if (typeof icon === 'string') {
    const iconName: string = nameByVariant[iconVariant](icon);
    return (
      <IconAdapter {...props}>
        <ion-icon name={iconName}></ion-icon>
      </IconAdapter>
    );
  }
  return icon;
}
