import { Button } from '..';
import { ButtonProps } from '../../../../adapters/Inputs/Button';
import { ProviderIcon, ProviderType } from '../../Icon';
import { CircularProgress } from '../../Progress';

import './ConnectionButton.style.scss';

export type ConnectionsButtonProps = ButtonProps & {
  provider?: ProviderType,
  isConnecting?: boolean
};

export function ConnectionButton({
  onClick,
  children,
  provider = 'facebook',
  isConnecting = false,
  disabled,
  ...props
}: ConnectionsButtonProps): JSX.Element {
  return (
    <Button
      className="ConnectionButton"
      variant="secondary"
      onClick={onClick}
      disabled={disabled}
      {...props}
      icon={
        isConnecting ? (
          <CircularProgress withBackground={false} thickness={3} size={20} />
        ) : (
          <ProviderIcon
            provider={provider}
            isGrayscale={disabled}
            fontSize="large"
            className="ConnectionButton__icon"
          />
        )
      }>
      {children}
    </Button>
  );
}
