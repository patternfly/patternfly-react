import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelActionLink = ({ children, className, ...props }) => {
  const classes = classNames('drawer-pf-action-link', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanelActionLink.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanelActionLink.defaultProps = {
  className: ''
};

export default NotificationDrawerPanelActionLink;
