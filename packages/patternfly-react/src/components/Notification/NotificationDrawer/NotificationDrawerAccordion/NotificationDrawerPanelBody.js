import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const NotificationDrawerPanelBody = ({ maxHeight, children, className, ...props }) => {
  const classes = classNames('panel-body', className);
  return (
    <div className={classes} style={{ maxHeight }} {...props}>
      {children}
    </div>
  );
};
NotificationDrawerPanelBody.propTypes = {
  /** Child node - contents of the element */
  children: PropTypes.node.isRequired,
  /** Additional element css classes */
  className: PropTypes.string,
  /** Custom Height for Panel */
  maxHeight: PropTypes.number
};
NotificationDrawerPanelBody.defaultProps = {
  className: '',
  maxHeight: null
};

export default NotificationDrawerPanelBody;
