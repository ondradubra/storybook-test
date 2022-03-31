import React from 'react';
import { FontSize } from '../../../Customization/Theming/Typographies';
export declare type ListItemProps = Pick<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, 'value' | 'children' | 'className'> & {
    size?: FontSize;
};
declare function ListItem({ children, size, ...props }: ListItemProps): JSX.Element;
export { ListItem };
//# sourceMappingURL=ListItem.d.ts.map