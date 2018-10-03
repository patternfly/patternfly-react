import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/Alert/alert.css';
import accessibleStyles from '@patternfly/patternfly-next/utilities/Accessibility/accessibility.css';
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
  /** Adds Alert variant styles */
  variant: PropTypes.oneOf(Object.values(AlertVariant)).isRequired,
  /** Action button to put in the Alert */
  action: PropTypes.node,
  /** Title of the Alert */
  title: PropTypes.string,
  /** content rendered inside the Alert */
  children: PropTypes.node,
  /** additional classes added to the Alert */
  className: PropTypes.string,
  /** Adds accessible text to the Alert */
  'aria-label': PropTypes.string
};

const defaultProps = {
  'aria-label': undefined,
  action: null,
  title: '',
  children: '',
  className: ''
};

const getDefaultAriaLabel = variant => `${capitalize(AlertVariant[variant])} Notification`;

const Alert = ({
  variant,
  'aria-label': ariaLabel = getDefaultAriaLabel(variant),
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
