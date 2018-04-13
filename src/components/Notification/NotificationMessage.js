import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationMessage = ({ children, className, ...props }) => {
  const classes = classNames('drawer-pf-notification-message', className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};
NotificationMessage.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationMessage.defaultProps = {
  className: ''
};

export default NotificationMessage;
