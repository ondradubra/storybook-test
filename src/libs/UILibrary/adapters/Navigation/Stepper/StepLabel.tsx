import MUIStepLabel, {
  StepLabelProps as MUIStepLabelProps
} from '@mui/material/StepLabel';

export type StepLabelProps = {
  children: MUIStepLabelProps['children'],
  optional?: MUIStepLabelProps['optional'],
  className?: string,
  icon?: MUIStepLabelProps['icon']
};

export function StepLabel({
  className = '',
  icon = null,
  ...props
}: StepLabelProps): JSX.Element {
  return (
    <MUIStepLabel
      className={`StepLabel ${className}`}
      StepIconProps={{ className: 'StepLabel__icon' }}
      componentsProps={{
        label: { className: 'StepLabel__label' }
      }}
      icon={icon}
      {...props}
    />
  );
}
