import { ReactNode } from 'react';
import '../../../styles/freestyle.style.scss';
export declare type FreestyleProps = {
    children: ReactNode | ReactNode[];
    className?: string;
};
/**
 * Freestyle should be used as a wrapper for uniqe content that
 * is not meant to be reusable.
 */
export declare function Freestyle({ children, className }: FreestyleProps): JSX.Element;
//# sourceMappingURL=Freestyle.d.ts.map