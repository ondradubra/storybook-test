import MUIDialogContent from '@mui/material/DialogContent';
import { DialogContentProps as MUIDialogContentProps } from '@mui/material';

type DialogContentProps = Pick<MUIDialogContentProps, 'children'>;

export function DialogContent({ children, ...props }: DialogContentProps) {
  return (
    <MUIDialogContent className="Dialog__Content" {...props}>
      {children}
    </MUIDialogContent>
  );
}
