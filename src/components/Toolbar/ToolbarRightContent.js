import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ToolbarRightContent = ({ children, className, ...rest }) => {
  const classes = cx('toolbar-pf-action-right', className);
  return <div className={classes}>{children}</div>;
};

ToolbarRightContent.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

export default ToolbarRightContent;
