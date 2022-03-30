import MUICardHeader, {
  CardHeaderProps as MUICardHeaderProps
} from '@mui/material/CardHeader';
import { useEffect, useRef } from 'react';
import { DataRole } from '../../../components/minerals/BaseDOMTypes';

import './Card.styles.scss';

export type CardHeaderProps = {
  children?: MUICardHeaderProps['children'],
  className?: string,
  avatar?: MUICardHeaderProps['avatar'],
  action?: MUICardHeaderProps['action'],
  title?: MUICardHeaderProps['title'],
  subheader?: MUICardHeaderProps['subheader'],
  'data-role-action'?: DataRole
};

export function CardHeader({
  children,
  className = '',
  'data-role-action': dataRoleAction,
  ...props
}: CardHeaderProps): JSX.Element {
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * We need to add a data-role attribute straight on the <button> element so that QA can easily access it
   * MUI doesn't really help us with that
   */
  useEffect(() => {
    if (!ref?.current) return;

    const actionNode = Array.from(ref.current.children).find(node =>
      node.className.includes('CardHeader__action')
    );
    if (!actionNode) return;
    const buttonNode = Array.from(actionNode.children).find(node =>
      node.className.includes('Button')
    );
    if (!buttonNode) return;

    // @ts-ignore
    buttonNode.dataset.role = dataRoleAction;
  }, [ref, dataRoleAction]);

  return (
    <MUICardHeader
      ref={ref}
      className={`CardHeader ${className}`}
      classes={{ action: 'CardHeader__action' }}
      {...props}>
      {children}
    </MUICardHeader>
  );
}
