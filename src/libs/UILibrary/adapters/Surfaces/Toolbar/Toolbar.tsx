import MUIToolbar from '@mui/material/Toolbar';
import { ToolbarHead } from './ToolbarHead';
import { ToolbarTail } from './ToolbarTail';
import { ToolbarItem } from './ToolbarItem';

import './Toolbar.style.scss';

export type ToolbarProps = {
  children: JSX.Element | JSX.Element[],
  className?: string
};

function Toolbar({
  children,
  className = '',
  ...props
}: ToolbarProps): JSX.Element {
  return (
    <MUIToolbar className={`Toolbar ${className}`} {...props}>
      {children}
    </MUIToolbar>
  );
}

Toolbar.Head = ToolbarHead;
Toolbar.Tail = ToolbarTail;
Toolbar.Item = ToolbarItem;

export { Toolbar };
