import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelTitle = ({ children, className, ...props }) => {
  const classes = classNames('panel-title', className);

  return (
    <h4 className={classes} {...props}>
      {children}
    </h4>
  );
};
NotificationDrawerPanelTitle.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node,
  /** Additional element css classes */
  className: PropTypes.string
};
NotificationDrawerPanelTitle.defaultProps = {
  className: '',
  children: null
};

export default NotificationDrawerPanelTitle;
