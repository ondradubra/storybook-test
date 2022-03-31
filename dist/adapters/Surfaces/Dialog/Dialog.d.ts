/// <reference types="react" />
import { DialogProps as MUIDialogProps } from '@mui/material/Dialog';
import { DialogActions } from './DialogActions';
import { DialogContent } from './DialogContent';
import './Dialog.style.scss';
export type { DialogInternalProps };
declare type DialogInternalProps = {
    paperClassName?: MUIDialogProps['className'];
};
export declare type DialogProps = {
    className?: MUIDialogProps['className'];
    children: MUIDialogProps['children'];
    onClose?: MUIDialogProps['onClose'];
    open: boolean;
};
export declare function Dialog({ children, className, paperClassName, onClose, ...props }: DialogInternalProps & DialogProps): JSX.Element;
export declare namespace Dialog {
    var Content: typeof DialogContent;
    var Actions: typeof DialogActions;
}
//# sourceMappingURL=Dialog.d.ts.map