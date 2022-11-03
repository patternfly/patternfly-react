import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
import ExclamationTriangleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const variantIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon,
  default: BellIcon
};

export interface AlertIconProps extends React.HTMLProps<HTMLDivElement> {
  /** Additional class names added to the alert icon. */
  className?: string;
  /** A custom icon. If not set the icon is set according to the variant. */
  customIcon?: React.ReactNode;
  /** Variant of the alert icon. */
  variant: 'success' | 'danger' | 'warning' | 'info' | 'default';
}

export const AlertIcon = ({ variant, customIcon, className = '', ...props }: AlertIconProps) => {
  const Icon = variantIcons[variant];
  return Icon ? (
    <div {...props} className={css(styles.alertIcon, className)}>
      {customIcon || <Icon />}
    </div>
  ) : null;
};
