import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ToolbarRightContent = ({ children, className, ...rest }) => {
  const classes = classNames('toolbar-pf-action-right', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

ToolbarRightContent.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
ToolbarRightContent.defaultProps = {
  children: null,
  className: ''
};
export default ToolbarRightContent;
