import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelCollapse = ({ children, collapseIn, className, ...props }) => {
  const classes = classNames('panel-collapse', { 'collapse in': collapseIn }, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanelCollapse.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** collapse in bool */
  collapseIn: PropTypes.bool
};
NotificationDrawerPanelCollapse.defaultProps = {
  className: '',
  collapseIn: false
};

export default NotificationDrawerPanelCollapse;
