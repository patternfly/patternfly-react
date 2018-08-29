import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FilterList = ({ children, className, ...props }) => {
  if (!children) {
    return null;
  }
  const classes = classNames('list-inline', className);
  return <ul className={classes}>{children}</ul>;
};

FilterList.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};

FilterList.defaultProps = {
  children: null,
  className: ''
};

export default FilterList;
