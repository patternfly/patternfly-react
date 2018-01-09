import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FilterActiveLabel = ({ children, className, ...rest }) => {
  const classes = cx('filter-pf-active-label', className);
  return <p className={classes}>{children}</p>;
};

FilterActiveLabel.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

export default FilterActiveLabel;
