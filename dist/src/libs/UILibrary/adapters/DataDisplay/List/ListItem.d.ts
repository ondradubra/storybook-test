/// <reference types="react" />
import { ListItemProps as MUIListItemProps } from '@mui/material/ListItem';
export declare type ListItemProps = {
    children: MUIListItemProps['children'];
    className?: string;
    dense?: MUIListItemProps['dense'];
    secondaryAction?: MUIListItemProps['secondaryAction'];
};
export declare function ListItem({ children, className, dense, ...props }: ListItemProps): JSX.Element;
//# sourceMappingURL=ListItem.d.ts.map