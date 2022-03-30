import MUIStep, { StepProps as MUIStepProps } from '@mui/material/Step';

export type StepProps = {
  children: MUIStepProps['children'],
  disabled?: MUIStepProps['disabled'],
  active?: MUIStepProps['active'],
  completed?: MUIStepProps['completed'],
  expanded?: MUIStepProps['expanded'],
  className?: string
};

export function Step({ className = '', ...props }: StepProps): JSX.Element {
  return <MUIStep className={className} {...props} />;
}
