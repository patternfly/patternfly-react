import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelAction = ({ children, className, ...props }) => {
  const classes = classNames('drawer-pf-action', className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanelAction.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanelAction.defaultProps = {
  className: ''
};

export default NotificationDrawerPanelAction;
