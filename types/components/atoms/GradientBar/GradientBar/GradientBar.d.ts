import './GradientBar.style.scss';
import { CSSProperties } from 'react';
declare type GradientBarProps = {
    height?: CSSProperties['height'];
    width?: CSSProperties['width'];
    animated?: boolean;
};
declare function GradientBar({ height, width, animated }: GradientBarProps): any;
export { GradientBar };
