import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawer = ({ hide, expanded, children, className, ...props }) => {
  const classes = classNames(
    'drawer-pf drawer-alt-pf drawer-pf-notifications',
    { 'drawer-pf-expanded': expanded },
    { hide },
    className
  );
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawer.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Expanded bool */
  expanded: PropTypes.bool,
  /** Hide Bool */
  hide: PropTypes.bool
};
NotificationDrawer.defaultProps = {
  className: '',
  expanded: false,
  hide: false
};

export default NotificationDrawer;
