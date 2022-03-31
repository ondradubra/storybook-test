/// <reference types="react" />
import { StepperProps as MUIStepperProps, Orientation as MUIOrientation } from '@mui/material/Stepper';
export declare type StepperProps = {
    children: MUIStepperProps['children'];
    orientation?: MUIOrientation;
    className?: string;
};
export declare function Stepper({ className, orientation, ...props }: StepperProps): JSX.Element;
//# sourceMappingURL=Stepper.d.ts.map