/// <reference types="react" />
import { CardProps as MUICardProps } from '@mui/material/Card';
export declare type CardProps = {
    children: MUICardProps['children'];
    variant?: MUICardProps['variant'];
    className?: string;
};
export declare function Card({ children, variant, className, ...props }: CardProps): JSX.Element;
//# sourceMappingURL=Card.d.ts.map