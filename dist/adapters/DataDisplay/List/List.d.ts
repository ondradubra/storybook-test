/// <reference types="react" />
import { ListProps as MUIListProps } from '@mui/material/List';
export declare type ListProps = {
    children: MUIListProps['children'];
    className?: string;
    dense?: MUIListProps['dense'];
    subheader?: MUIListProps['subheader'];
};
export declare function List({ children, dense, className, ...props }: ListProps): JSX.Element;
//# sourceMappingURL=List.d.ts.map