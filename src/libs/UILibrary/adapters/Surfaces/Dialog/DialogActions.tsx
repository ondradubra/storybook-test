import MUIDialogActions from '@mui/material/DialogActions';
import { DialogActionsProps as MUIDialogActionsProps } from '@mui/material';

type DialogActionsProps = Pick<MUIDialogActionsProps, 'children'>;

export function DialogActions({ children, ...props }: DialogActionsProps) {
  return (
    <MUIDialogActions className="Dialog__Actions" {...props}>
      {children}
    </MUIDialogActions>
  );
}
