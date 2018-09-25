import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Alert/alert.css';

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon
} from '@patternfly/react-icons';

export const variantIcons = {
  success: CheckCircleIcon,
  danger: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  info: InfoCircleIcon
};

const propTypes = {
  variant: PropTypes.oneOf(Object.keys(variantIcons)).isRequired,
  className: PropTypes.string
};

const defaultProps = {
  className: ''
};

const AlertIcon = ({ variant, className, ...props }) => {
  const Icon = variantIcons[variant];
  return (
    <div {...props} className={css(styles.alertIcon, className)}>
      <Icon />
    </div>
  );
};

AlertIcon.propTypes = propTypes;
AlertIcon.defaultProps = defaultProps;

export default AlertIcon;
