import './Fab.style.scss';
import { ForwardedRef } from 'react';
import { FabProps as MUIFabProps } from '@mui/material/Fab';
import { BaseInputTypes } from '../../../components/minerals/BaseInputTypes';
declare type FabInternalProps = {
    innerRef: ForwardedRef<HTMLButtonElement>;
    variant?: MUIFabProps['variant'];
    color?: MUIFabProps['color'];
};
export declare type FabProps = {
    children: MUIFabProps['children'];
    onClick: BaseInputTypes['onClick'];
    size?: MUIFabProps['size'];
    disabled?: boolean;
    className?: string;
};
export declare function Fab({ innerRef, className, ...props }: FabInternalProps & FabProps): JSX.Element;
export {};
//# sourceMappingURL=Fab.d.ts.map