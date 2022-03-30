import './Icon.style.scss';
import MUIIcon, { IconProps as MUIIconProps } from '@mui/material/Icon';

type IconInternalProps = {
  children: MUIIconProps['children']
};

export type IconProps = {
  className?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg',
  color?: MUIIconProps['color']
};

export function Icon({
  children,
  size = 'md',
  color = 'inherit',
  className = '',
  ...props
}: IconInternalProps & IconProps) {
  return (
    <MUIIcon
      color={color}
      className={`Icon Icon--${size} ${className}`}
      {...props}>
      {children}
    </MUIIcon>
  );
}
