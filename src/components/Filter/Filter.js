import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ children, className, ...rest }) => {
  const classes = cx('filter-pf form-group', className);
  return (
    <div className={classes} {...rest}>
      <div className="filter-pf-fields">
        <div className="input-group">{children}</div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

export default Filter;
