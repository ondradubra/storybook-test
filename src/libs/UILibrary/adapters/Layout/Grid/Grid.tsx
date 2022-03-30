import MUIGrid, { GridProps as MUIGridProps } from '@mui/material/Grid';

export type GridProps = {
  children: MUIGridProps['children'],
  direction?: MUIGridProps['direction'],
  spacing?: MUIGridProps['spacing'],
  columns?: MUIGridProps['columns'],
  rowSpacing?: MUIGridProps['rowSpacing'],
  wrap?: MUIGridProps['wrap'],
  className?: string
};

export type GridItemProps = {
  children: MUIGridProps['children'],
  columnSpacing?: MUIGridProps['columnSpacing'],
  lg?: MUIGridProps['lg'],
  md?: MUIGridProps['md'],
  sm?: MUIGridProps['sm'],
  xs?: MUIGridProps['xs'],
  className?: string
};

export function GridItem({
  className = '',
  ...props
}: GridItemProps): JSX.Element {
  return <MUIGrid item className={`GridItem ${className}`} {...props} />;
}

function Grid({
  className = '',
  direction = 'row',
  ...props
}: GridProps): JSX.Element {
  return <MUIGrid container className={`Grid ${className}`} {...props} />;
}

Grid.Item = GridItem;

export { Grid };
