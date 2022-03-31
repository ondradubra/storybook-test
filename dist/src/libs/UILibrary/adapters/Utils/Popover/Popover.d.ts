/// <reference types="react" />
import { PopoverProps as MUIPopoverProps } from '@mui/material/Popover';
export declare type PopoverProps = {
    children: MUIPopoverProps['children'];
    open: MUIPopoverProps['open'];
    anchorEl?: MUIPopoverProps['anchorEl'];
    onClose?: MUIPopoverProps['onClose'];
    className?: string;
    anchorOrigin?: MUIPopoverProps['anchorOrigin'];
    transformOrigin?: MUIPopoverProps['transformOrigin'];
};
export declare function Popover({ children, className, anchorOrigin, transformOrigin, ...props }: PopoverProps): JSX.Element;
//# sourceMappingURL=Popover.d.ts.map