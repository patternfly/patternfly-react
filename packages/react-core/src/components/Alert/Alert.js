import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Alert/styles.css';
import accessibleStyles from '@patternfly/patternfly-next/utilities/Accessibility/styles.css';

import AlertIcon from './AlertIcon';
import AlertBody from './AlertBody';
import AlertAction from './AlertAction';
import { capitalize } from '../../internal/util';

export const AlertVariant = {
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info'
};

const propTypes = {
  variant: PropTypes.oneOf(Object.keys(AlertVariant)).isRequired,
  action: PropTypes.node,
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

const defaultProps = {
  ariaLabel: undefined,
  action: null,
  title: '',
  children: '',
  className: ''
};

const Alert = ({
  variant,
  ariaLabel = `${capitalize(AlertVariant[variant])} Notification`,
  action,
  title,
  children,
  className,
  ...props
}) => {
  const readerTitle = (
    <React.Fragment>
      <span className={css(accessibleStyles.srOnly)}>{capitalize(AlertVariant[variant])}: </span>
      {title}
    </React.Fragment>
  );

  const customClassName = css(styles.alert, getModifier(styles, variant, styles.modifiers.info), className);

  return (
    <div {...props} className={customClassName} aria-label={ariaLabel}>
      <AlertIcon variant={variant} />
      <AlertBody title={readerTitle}>{children}</AlertBody>
      {action && <AlertAction>{action}</AlertAction>}
    </div>
  );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
