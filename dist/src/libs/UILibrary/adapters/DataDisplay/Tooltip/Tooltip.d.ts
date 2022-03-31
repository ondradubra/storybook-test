/// <reference types="react" />
import { TooltipProps as MUITooltipProps } from '@mui/material/Tooltip';
import './Tooltip.style.scss';
export declare type TooltipProps = {
    children: MUITooltipProps['children'];
    title: MUITooltipProps['title'];
    placement?: MUITooltipProps['placement'];
    open?: MUITooltipProps['open'];
    className?: string;
    arrow?: boolean;
    elevation?: 'base' | 'dialog';
};
export declare function Tooltip({ placement, className, elevation, ...props }: TooltipProps): JSX.Element;
//# sourceMappingURL=Tooltip.d.ts.map