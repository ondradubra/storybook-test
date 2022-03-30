import { StepConnector } from '@mui/material';
import MUIStepper, {
  StepperProps as MUIStepperProps,
  Orientation as MUIOrientation
} from '@mui/material/Stepper';

export type StepperProps = {
  children: MUIStepperProps['children'],
  orientation?: MUIOrientation,
  className?: string
};

export function Stepper({
  className = '',
  orientation = 'vertical',
  ...props
}: StepperProps): JSX.Element {
  return (
    <MUIStepper
      className={className}
      orientation={orientation}
      connector={
        <StepConnector classes={{ vertical: 'StepConnector--vertical' }} />
      }
      {...props}
    />
  );
}
