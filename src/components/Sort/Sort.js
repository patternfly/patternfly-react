import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Sort = ({ children, className, ...rest }) => {
  const classes = cx('form-group', className);
  return (
    <div className={classes} {...rest}>
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

export default Sort;
