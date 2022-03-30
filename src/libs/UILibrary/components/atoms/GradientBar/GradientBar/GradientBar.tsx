import './GradientBar.style.scss';
import { CSSProperties } from 'react';

import { Block } from '../../../../adapters/Surfaces/Box';

type GradientBarProps = {
  height?: CSSProperties['height'],
  width?: CSSProperties['width'],
  animated?: boolean
};

function GradientBar({
  height = '6px',
  width = '100%',
  animated = false
}: GradientBarProps) {
  return (
    <Block
      className={`GradientBar ${animated ? 'GradientBar--animated' : ''}`}
      style={{ height, width }}
    />
  );
}

export { GradientBar };
