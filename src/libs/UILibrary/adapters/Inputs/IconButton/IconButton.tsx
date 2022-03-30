import React, { ForwardedRef, ReactElement } from 'react';

import MUIIconButton, {
  IconButtonProps as MUIIconButtonProps
} from '@mui/material/IconButton';

import { BaseInputTypes } from '../../../components/minerals/BaseInputTypes';
import { BASIC_COLORS } from '../../../foundations';

type IconButtonInternalProps = {
  innerRef: ForwardedRef<HTMLButtonElement>,
  children: MUIIconButtonProps['children'],
  color?: MUIIconButtonProps['color'],
  sx?: MUIIconButtonProps['sx']
};

export type IconButtonProps = {
  variant: 'secondary' | 'tertiary' | 'naked',
  className?: string,
  onClick: BaseInputTypes['onClick'],
  disabled?: boolean
};

const styleByVariant = {
  secondary: {
    backgroundColor: 'secondary.main',
    '&.Mui-disabled': {
      backgroundColor: BASIC_COLORS.GRAY.VARIANT1,
      color: BASIC_COLORS.GRAY.VARIANT4
    }
  },
  tertiary: {
    boxShadow: 'inset 0px 0px 0px 1px',
    '&.Mui-disabled': {
      color: BASIC_COLORS.GRAY.VARIANT4,
      boxShadow: `inset 0px 0px 0px 1px ${BASIC_COLORS.GRAY.VARIANT2}`
    }
  },
  naked: {
    '&.Mui-disabled': {
      color: BASIC_COLORS.GRAY.VARIANT4
    }
  }
};

export function IconButton({
  innerRef,
  children,
  variant,
  className = '',
  disabled = false,
  ...props
}: IconButtonInternalProps & IconButtonProps): ReactElement<any, any> {
  return (
    <MUIIconButton
      ref={innerRef}
      component="span"
      className={className}
      disabled={disabled}
      sx={styleByVariant[variant]}
      {...props}>
      {children}
    </MUIIconButton>
  );
}
