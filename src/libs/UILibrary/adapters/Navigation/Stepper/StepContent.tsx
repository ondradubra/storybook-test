import MUIStepContent, {
  StepContentProps as MUIStepContentProps
} from '@mui/material/StepContent';

export type StepContentProps = {
  children: MUIStepContentProps['children'],
  className?: string
};

export function StepContent({
  className = '',
  children,
  ...props
}: StepContentProps): JSX.Element {
  return (
    <MUIStepContent className={`StepContent  ${className}`} {...props}>
      {children}
    </MUIStepContent>
  );
}
