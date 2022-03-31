/// <reference types="react" />
import { GridProps as MUIGridProps } from '@mui/material/Grid';
export declare type GridProps = {
    children: MUIGridProps['children'];
    direction?: MUIGridProps['direction'];
    spacing?: MUIGridProps['spacing'];
    columns?: MUIGridProps['columns'];
    rowSpacing?: MUIGridProps['rowSpacing'];
    wrap?: MUIGridProps['wrap'];
    className?: string;
};
export declare type GridItemProps = {
    children: MUIGridProps['children'];
    columnSpacing?: MUIGridProps['columnSpacing'];
    lg?: MUIGridProps['lg'];
    md?: MUIGridProps['md'];
    sm?: MUIGridProps['sm'];
    xs?: MUIGridProps['xs'];
    className?: string;
};
export declare function GridItem({ className, ...props }: GridItemProps): JSX.Element;
declare function Grid({ className, direction, ...props }: GridProps): JSX.Element;
declare namespace Grid {
    var Item: typeof GridItem;
}
export { Grid };
//# sourceMappingURL=Grid.d.ts.map