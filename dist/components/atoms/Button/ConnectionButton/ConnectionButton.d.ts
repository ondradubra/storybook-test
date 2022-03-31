/// <reference types="react" />
import { ButtonProps } from '../../../../adapters/Inputs/Button';
import { ProviderType } from '../../Icon';
import './ConnectionButton.style.scss';
export declare type ConnectionsButtonProps = ButtonProps & {
    provider?: ProviderType;
    isConnecting?: boolean;
};
export declare function ConnectionButton({ onClick, children, provider, isConnecting, disabled, ...props }: ConnectionsButtonProps): JSX.Element;
//# sourceMappingURL=ConnectionButton.d.ts.map