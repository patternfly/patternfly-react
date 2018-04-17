import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FilterActiveLabel = ({ children, className, ...props }) => {
  const classes = classNames('filter-pf-active-label', className);
  return (
    <p className={classes} {...props}>
      {children}
    </p>
  );
};

FilterActiveLabel.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

FilterActiveLabel.defaultProps = {
  children: null,
  className: ''
};

export default FilterActiveLabel;
