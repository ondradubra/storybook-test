import MUIDialog from '@mui/material/Dialog';
import { DialogProps as MUIDialogProps } from '@mui/material/Dialog';
import { DialogActions } from './DialogActions';
import { DialogContent } from './DialogContent';

import './Dialog.style.scss';

export type { DialogInternalProps };

type DialogInternalProps = {
  paperClassName?: MUIDialogProps['className']
};

export type DialogProps = {
  className?: MUIDialogProps['className'],
  children: MUIDialogProps['children'],
  onClose?: MUIDialogProps['onClose'],
  open: boolean
};

export function Dialog({
  children,
  className = '',
  paperClassName = '',
  onClose = () => {},
  ...props
}: DialogInternalProps & DialogProps): JSX.Element {
  return (
    <MUIDialog
      className={`Dialog ${className}`}
      PaperProps={{ elevation: 3 }}
      onClose={onClose}
      BackdropProps={{ className: 'Dialog__Backdrop' }}
      classes={{ paper: `Dialog__Paper ${paperClassName}` }}
      {...props}>
      {children}
    </MUIDialog>
  );
}

Dialog.Content = DialogContent;
Dialog.Actions = DialogActions;
