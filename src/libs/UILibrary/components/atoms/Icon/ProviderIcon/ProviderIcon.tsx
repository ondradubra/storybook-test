import { FunctionComponent } from 'react';

import {
  SvgIcon as SvgIconAdapter,
  SvgIconProps
} from '../../../../adapters/DataDisplay/Icon';

import { ReactComponent as AdwordsIcon } from '../../../../assets/logos/adwords_icon.svg';
import { ReactComponent as FacebookIcon } from '../../../../assets/logos/facebook_icon.svg';
import { ReactComponent as AdwordsIconGrayscale } from '../../../../assets/logos/adwords_icon_grayscale.svg';
import { ReactComponent as FacebookIconGrayscale } from '../../../../assets/logos/facebook_icon_grayscale.svg';
import { ReactComponent as GoogleIcon } from '../../../../assets/logos/google_icon.svg';
import { ReactComponent as GoogleIconGrayscale } from '../../../../assets/logos/google_icon_grayscale.svg';

export type ProviderType = 'facebook' | 'adwords' | 'google';

type ProviderIconProps = {
  provider: ProviderType,
  isGrayscale?: boolean,
  className?: string
};

const ProviderIcons: Record<ProviderType, FunctionComponent> = {
  adwords: AdwordsIcon,
  facebook: FacebookIcon,
  google: GoogleIcon
};

const ProviderIconsGrayscale: Record<ProviderType, FunctionComponent> = {
  adwords: AdwordsIconGrayscale,
  facebook: FacebookIconGrayscale,
  google: GoogleIconGrayscale
};

function getProviderIcon({
  provider,
  isGrayscale = false
}: ProviderIconProps): FunctionComponent {
  if (isGrayscale) return ProviderIconsGrayscale[provider];
  else return ProviderIcons[provider];
}

export function ProviderIcon({
  provider,
  isGrayscale = false,
  ...props
}: SvgIconProps & ProviderIconProps): JSX.Element {
  const ProviderIcon: FunctionComponent = getProviderIcon({
    provider,
    isGrayscale
  });
  return (
    <SvgIconAdapter viewBox="0 0 40 40" component={ProviderIcon} {...props} />
  );
}
