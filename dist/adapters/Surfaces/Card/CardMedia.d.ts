import { FunctionComponent } from 'react';
import { CardMediaProps as MUICardMediaProps } from '@mui/material/CardMedia';
export declare type CardMediaProps = {
    component?: FunctionComponent | string;
    image?: MUICardMediaProps['image'];
    src?: MUICardMediaProps['src'];
    className?: string;
};
export declare function CardMedia({ className, ...props }: CardMediaProps): JSX.Element;
//# sourceMappingURL=CardMedia.d.ts.map