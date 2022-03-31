/// <reference types="react" />
import { StepProps as MUIStepProps } from '@mui/material/Step';
export declare type StepProps = {
    children: MUIStepProps['children'];
    disabled?: MUIStepProps['disabled'];
    active?: MUIStepProps['active'];
    completed?: MUIStepProps['completed'];
    expanded?: MUIStepProps['expanded'];
    className?: string;
};
export declare function Step({ className, ...props }: StepProps): JSX.Element;
//# sourceMappingURL=Step.d.ts.map