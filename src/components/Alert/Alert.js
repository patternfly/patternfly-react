import ClassNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { ALERT_TYPES } from './constants';

/**
 * Alert Component for Patternfly React
 */
const Alert = ({ children, className, onDismiss, type, ...props }) => {
  const alertClass = ClassNames(className, {
    alert: true,
    'alert-danger': type === 'danger' || type === 'error',
    'alert-warning': type === 'warning',
    'alert-success': type === 'success',
    'alert-info': type === 'info',
    'alert-dismissable': onDismiss,
  });
  const iconClass = ClassNames({
    pficon: true,
    'pficon-error-circle-o': type === 'danger' || type === 'error',
    'pficon-warning-triangle-o': type === 'warning',
    'pficon-ok': type === 'success',
    'pficon-info': type === 'info',
  });

  return (
    <div className={alertClass} {...props}>
      {onDismiss && (
        <button
          type="button"
          className="close"
          aria-hidden="true"
          onClick={onDismiss}
        >
          <span className="pficon pficon-close" />
        </button>
      )}
      <span className={iconClass} />
      {children}
    </div>
  );
};
Alert.propTypes = {
  /** additional alert classes */
  className: PropTypes.string,
  /** callback when alert is dismissed  */
  onDismiss: PropTypes.func,
  /** the type of alert  */
  type: PropTypes.oneOf(ALERT_TYPES).isRequired,
  /** children nodes  */
  children: PropTypes.node,
};
Alert.defaultProps = {
  type: 'error',
};
Alert.ALERT_TYPES = ALERT_TYPES;

export default Alert;
