import MUITooltip, {
  TooltipProps as MUITooltipProps
} from '@mui/material/Tooltip';

import './Tooltip.style.scss';

export type TooltipProps = {
  children: MUITooltipProps['children'],
  title: MUITooltipProps['title'],
  placement?: MUITooltipProps['placement'],
  open?: MUITooltipProps['open'],
  className?: string,
  arrow?: boolean,
  elevation?: 'base' | 'dialog'
};

export function Tooltip({
  placement = 'top',
  className = '',
  elevation = 'base',
  ...props
}: TooltipProps): JSX.Element {
  return (
    <MUITooltip
      classes={{
        popper: `Tooltip__popper Tooltip__popper--${elevation}`,
        tooltip: className,
        arrow: 'Tooltip__arrow'
      }}
      placement={placement}
      {...props}
    />
  );
}
