import { FunctionComponent } from 'react';

import MUICardMedia, {
  CardMediaProps as MUICardMediaProps
} from '@mui/material/CardMedia';

export type CardMediaProps = {
  component?: FunctionComponent | string,
  image?: MUICardMediaProps['image'],
  src?: MUICardMediaProps['src'],
  className?: string
};

export function CardMedia({
  className = '',
  ...props
}: CardMediaProps): JSX.Element {
  return <MUICardMedia className={className} {...props} />;
}
