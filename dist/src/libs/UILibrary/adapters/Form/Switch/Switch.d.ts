/// <reference types="react" />
import { SwitchProps as MUISwitchProps } from '@mui/material/Switch';
import './Switch.style.scss';
declare type SwitchInternalProps = {
    className?: MUISwitchProps['className'];
};
export declare type SwitchProps = {
    checked?: MUISwitchProps['checked'];
    disabled?: MUISwitchProps['disabled'];
};
export declare function Switch({ className, ...props }: SwitchInternalProps & SwitchProps): JSX.Element;
export {};
//# sourceMappingURL=Switch.d.ts.map