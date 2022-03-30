import { Block } from '../Box';

export type ToolbarTailProps = {
  children: JSX.Element | JSX.Element[],
  className?: string
};

export function ToolbarTail({
  children,
  className = '',
  ...props
}: ToolbarTailProps): JSX.Element {
  return (
    <Block className={className} {...props}>
      {children}
    </Block>
  );
}
