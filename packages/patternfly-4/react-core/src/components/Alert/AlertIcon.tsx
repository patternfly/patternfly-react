import React, { HTMLProps, ReactNode } from 'react';
import { css } from '@patternfly/react-styles'; import styles from '@patternfly/patternfly/components/Alert/alert.css';
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon
} from '@patternfly/react-icons';

export enum AlertVariant {
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info'
};

export interface AlertIconProps extends HTMLProps<HTMLDivElement> {
  /** variant */
  variant?: AlertVariant;
  /** className */
  className?: string;
};

export const defaultAlertIconProps = {
  className: ''
};

const getVariant = variant => {
  switch (variant) {
    case AlertVariant.SUCCESS: return CheckCircleIcon;
    case AlertVariant.DANGER: return ExclamationCircleIcon;
    case AlertVariant.WARNING: return ExclamationTriangleIcon;
    default: return InfoCircleIcon;
  }
}

export const AlertIcon: React.FunctionComponent<AlertIconProps> = ({ variant, className, ...props }) => {
  const Icon = getVariant(variant);
  return (
    <div {...props} className={css(styles.alertIcon, className)}>
      <Icon />
    </div>
  );
};

AlertIcon.defaultProps = defaultAlertIconProps;
