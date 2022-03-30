import { Block } from '../Box';

export type ToolbarHeadProps = {
  children: JSX.Element | JSX.Element[],
  className?: string
};

export function ToolbarHead({
  children,
  className = '',
  ...props
}: ToolbarHeadProps): JSX.Element {
  return (
    <Block className={className} {...props}>
      {children}
    </Block>
  );
}
