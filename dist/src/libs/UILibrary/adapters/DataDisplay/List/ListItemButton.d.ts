/// <reference types="react" />
import { ListItemButtonProps as MUIListItemButtonProps } from '@mui/material/ListItemButton';
import './List.styles.scss';
export declare type ListItemButtonProps = {
    children: MUIListItemButtonProps['children'];
    className?: string;
    dense?: MUIListItemButtonProps['dense'];
    disabled?: MUIListItemButtonProps['disabled'];
    selected?: MUIListItemButtonProps['selected'];
    onClick?: MUIListItemButtonProps['onClick'];
};
export declare function ListItemButton({ children, dense, className, disabled, selected, onClick, ...props }: ListItemButtonProps): JSX.Element;
//# sourceMappingURL=ListItemButton.d.ts.map