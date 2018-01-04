import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FilterList = ({ children, className, ...rest }) => {
  if (!children) {
    return null;
  }
  const classes = cx('list-inline', className);
  return <ul className={classes}>{children}</ul>;
};

FilterList.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

export default FilterList;
