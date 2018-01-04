import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const FilterActiveLabel = ({ className, title, ...rest }) => {
  const classes = cx('filter-pf-active-label', className);
  return <p className={classes}>{title}</p>;
};

FilterActiveLabel.propTypes = {
  /** Additional css classes */
  className: PropTypes.string,
  /** Title for the list (ie. 'Active Filters:') */
  title: PropTypes.string.isRequired
};

export default FilterActiveLabel;
