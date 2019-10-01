import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Alert/alert';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
  BellIcon
} from '@patternfly/react-icons';

export const variantIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon,
  default: BellIcon
};

export interface AlertIconProps extends React.HTMLProps<HTMLDivElement> {
  /** variant */
  variant: 'success' | 'danger' | 'warning' | 'info' | 'default';
  /** className */
  className?: string;
}

export const AlertIcon = ({ variant, className = '', ...props }: AlertIconProps) => {
  const Icon = variantIcons[variant];
  return (
    <div {...props} className={css(styles.alertIcon, className)}>
      <Icon />
    </div>
  );
};
