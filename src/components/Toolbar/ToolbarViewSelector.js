import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ToolbarViewSelector = ({ children, className, ...rest }) => {
  const classes = cx('form-group toolbar-pf-view-selector', className);
  return <div className={classes}>{children}</div>;
};

ToolbarViewSelector.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

export default ToolbarViewSelector;
