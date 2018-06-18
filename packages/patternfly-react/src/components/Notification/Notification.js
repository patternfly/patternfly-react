import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

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
        ? [
            <Spinner key="notification_spinner" inline loading size="xs" />,
            ' Loading More'
          ]
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

export default Notification;
