import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ToolbarViewSelector = ({ children, className, ...props }) => {
  const classes = classNames('form-group toolbar-pf-view-selector', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

ToolbarViewSelector.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

ToolbarViewSelector.defaultProps = {
  children: null,
  className: ''
};

export default ToolbarViewSelector;
