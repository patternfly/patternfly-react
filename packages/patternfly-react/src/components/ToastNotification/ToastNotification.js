import classNames from 'classnames';
import React from 'react';
import { Alert } from '../Alert';

/**
 * ToastNotification Component for Patternfly React
 */
const ToastNotification = ({ children, className, ...props }) => {
  const notificationClasses = classNames('toast-pf', className);

  return (
    <Alert className={notificationClasses} {...props}>
      {children}
    </Alert>
  );
};

ToastNotification.propTypes = { ...Alert.propTypes };
ToastNotification.defaultProps = { ...Alert.defaultProps };

ToastNotification.TOAST_NOTIFICATION_TYPES = [...Alert.ALERT_TYPES];

export default ToastNotification;
