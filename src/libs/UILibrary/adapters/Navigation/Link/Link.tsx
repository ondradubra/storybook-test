import './Link.style.scss';
import MUILink, { LinkProps as MUILinkProps } from '@mui/material/Link';

type LinkInternalProps = {
  variant?: MUILinkProps['variant'],
  component?: string,
  color?: MUILinkProps['color']
};

export type LinkProps = {
  className?: string,
  children: MUILinkProps['children'],
  onClick: MUILinkProps['onClick'],
  size?: 'xs' | 'sm' | 'md',
  disabled?: boolean
};

export function Link({
  className = '',
  size = 'md',
  disabled,
  ...props
}: LinkInternalProps & LinkProps): JSX.Element {
  return (
    <MUILink
      className={`Link Link--${size} ${
        disabled ? 'Link--disabled' : ''
      } ${className}`}
      {...props}
    />
  );
}
