import { ReactComponent as JoinrLogoLight } from '../../../../assets/logos/joinr_logo_light_mode.svg';
import { ReactComponent as JoinrLogoDark } from '../../../../assets/logos/joinr_logo_dark_mode.svg';
import { ReactComponent as JoinrLightGrayScale } from '../../../../assets/logos/joinr_logo_light_mode_grayscale.svg';
import { ReactComponent as JoinrDarkGrayScale } from '../../../../assets/logos/joinr_logo_dark_mode_grayscale.svg';

type LogoProps = {
  // eslint-disable-next-line prettier/prettier
  mode: keyof typeof mappedLogos,
  size?: number
}

const mappedLogos = {
  light: JoinrLogoLight,
  dark: JoinrLogoDark,
  lightGrayScale: JoinrLightGrayScale,
  darkGrayScale: JoinrDarkGrayScale,
};

export const Logo = ({ mode, size = 50, ...props }: LogoProps): JSX.Element => {
  const ReactLogoComponent = mappedLogos[mode];

  return <ReactLogoComponent width={`${size}px`} height={`${size}px`} {...props} />
};
