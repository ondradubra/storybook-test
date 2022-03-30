import MUIFormControlLabel, {
  FormControlLabelProps as MUIFormControlLabelProps
} from '@mui/material/FormControlLabel';

import './FormControlLabel.style.scss';
import { TextBlock } from '../../../components/atoms/Text';

type FormControlLabelInternalProps = {
  control: MUIFormControlLabelProps['control']
};

export type FormControlLabelProps = {
  className?: MUIFormControlLabelProps['className'],
  label: MUIFormControlLabelProps['label'],
  checked?: MUIFormControlLabelProps['checked'],
  disabled?: MUIFormControlLabelProps['disabled'],
  value?: MUIFormControlLabelProps['value'],
  onChange?: MUIFormControlLabelProps['onChange']
};

export function FormControlLabel({
  label,
  className = '',
  ...props
}: FormControlLabelInternalProps & FormControlLabelProps) {
  return (
    <MUIFormControlLabel
      label={typeof label === 'string' ? <TextBlock>{label}</TextBlock> : label}
      className={`FormControlLabel ${className}`}
      classes={{
        disabled: 'FormControlLabel--disabled',
        label: 'FormControlLabel__label'
      }}
      {...props}
    />
  );
}
