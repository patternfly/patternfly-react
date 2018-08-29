import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';
import NotificationContent from './NotificationContent';
import NotificationInfo from './NotificationInfo';
import NotificationMessage from './NotificationMessage';
import NotificationInfoRight from './NotificationInfoRight';
import NotificationInfoLeft from './NotificationInfoLeft';

const Notification = ({ type, children, seen, className, ...props }) => {
  const classes = classNames(
    {
      'drawer-pf-notification': type === 'notification',
      'drawer-pf-loading text-center': type === 'loading'
    },
    { unread: !seen },
    className
  );

  return (
    <div className={classes} {...props}>
      {type === 'loading'
        ? [<Spinner key="notification_spinner" inline loading size="xs" />, ' Loading More']
        : children}
    </div>
  );
};
Notification.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string,
  /** seen Notification Bool */
  seen: PropTypes.bool,
  /** show Loading Notification */
  type: PropTypes.string
};
Notification.defaultProps = {
  children: null,
  className: '',
  seen: false,
  type: 'notification'
};

Notification.Content = NotificationContent;
Notification.Info = NotificationInfo;
Notification.InfoRight = NotificationInfoRight;
Notification.InfoLeft = NotificationInfoLeft;
Notification.Message = NotificationMessage;

export default Notification;
