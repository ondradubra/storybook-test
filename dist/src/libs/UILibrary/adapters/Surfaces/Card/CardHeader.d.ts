/// <reference types="react" />
import { CardHeaderProps as MUICardHeaderProps } from '@mui/material/CardHeader';
import { DataRole } from '../../../components/minerals/BaseDOMTypes';
import './Card.styles.scss';
export declare type CardHeaderProps = {
    children?: MUICardHeaderProps['children'];
    className?: string;
    avatar?: MUICardHeaderProps['avatar'];
    action?: MUICardHeaderProps['action'];
    title?: MUICardHeaderProps['title'];
    subheader?: MUICardHeaderProps['subheader'];
    'data-role-action'?: DataRole;
};
export declare function CardHeader({ children, className, 'data-role-action': dataRoleAction, ...props }: CardHeaderProps): JSX.Element;
//# sourceMappingURL=CardHeader.d.ts.map