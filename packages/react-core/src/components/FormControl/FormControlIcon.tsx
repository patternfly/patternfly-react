import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/FormControl/form-control';
import { css } from '@patternfly/react-styles';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';

export const statusIcons = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon
};

export interface FormControlIconProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional class names added to the text input icon wrapper. */
  className?: string;
  /** A custom icon to render instead of a status icon. */
  customIcon?: React.ReactNode;
  /** The status icon to render. */
  status?: 'success' | 'error' | 'warning';
}

export const FormControlIcon = ({ status, customIcon, className, ...props }: FormControlIconProps) => {
  const StatusIcon = status && statusIcons[status];

  return (
    <span className={css(styles.formControlIcon, status && styles.modifiers.status, className)} {...props}>
      {customIcon || <StatusIcon />}
    </span>
  );
};
