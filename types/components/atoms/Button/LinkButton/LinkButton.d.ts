import './LinkButton.style.scss';
import { LinkProps } from '../../../../adapters/Navigation/Link';
import { IconProps } from '../../Icon';
declare type IconPosition = 'start' | 'end';
declare type LinkButtonProps = LinkProps & {
    iconPosition?: IconPosition;
    disabled?: boolean;
};
export declare function LinkButton({ children, size, icon, iconVariant, iconPosition, ...props }: LinkButtonProps & Partial<IconProps>): any;
export {};
