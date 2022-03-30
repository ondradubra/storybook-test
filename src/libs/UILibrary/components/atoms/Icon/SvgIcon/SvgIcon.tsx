import {
  SvgIcon as SvgIconAdapter,
  SvgIconProps
} from '../../../../adapters/DataDisplay/Icon';

export function SvgIcon({ children, ...props }: SvgIconProps): JSX.Element {
  return (
    <SvgIconAdapter component="svg" {...props}>
      {children}
    </SvgIconAdapter>
  );
}
