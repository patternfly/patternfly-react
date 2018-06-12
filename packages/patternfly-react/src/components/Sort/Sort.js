import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Sort Component for PatternFly React
 */
const Sort = ({ children, className, ...props }) => {
  const classes = classNames('form-group', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Sort.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

Sort.defaultProps = {
  children: null,
  className: ''
};

export default Sort;
