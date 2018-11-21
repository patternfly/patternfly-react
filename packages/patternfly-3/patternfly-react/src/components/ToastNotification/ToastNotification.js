import classNames from 'classnames';
import React from 'react';
import { Alert } from '../Alert';
import { default as TimedToastNotification } from './TimedToastNotification';
import { default as ToastNotificationList } from './ToastNotificationList';

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

// WARNING: If you change propTypes OR defaultProps  you MUST also change TimedToastNotification
ToastNotification.propTypes = { ...Alert.propTypes };
ToastNotification.defaultProps = { ...Alert.defaultProps };

// WARNING: If you change TOAST_NOTIFICATION_TYPES you MUST also change TimedToastNotification
ToastNotification.TOAST_NOTIFICATION_TYPES = [...Alert.ALERT_TYPES];
ToastNotification.Timed = TimedToastNotification;
ToastNotification.List = ToastNotificationList;

export default ToastNotification;
