import { Block } from '../Box';

export type ToolbarItemProps = {
  children: JSX.Element,
  className?: string
};

export function ToolbarItem({
  children,
  className = '',
  ...props
}: ToolbarItemProps): JSX.Element {
  return (
    <Block className={className} {...props}>
      {children}
    </Block>
  );
}
