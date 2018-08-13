import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanel = ({ children, expanded, className, ...props }) => {
  const classes = classNames('panel panel-default', { expanded }, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanel.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** isExpanded bool */
  expanded: PropTypes.bool
};
NotificationDrawerPanel.defaultProps = {
  className: '',
  expanded: false
};

export default NotificationDrawerPanel;
