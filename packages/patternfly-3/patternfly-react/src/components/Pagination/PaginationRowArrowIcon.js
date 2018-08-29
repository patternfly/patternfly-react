import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

/**
 * PaginationRowArrowIcon component for Patternfly React
 */
const PaginationRowArrowIcon = ({ name, ...props }) => {
  const iconName = `angle-${name}`;
  return <Icon type="fa" name={iconName} className="i" />;
};
PaginationRowArrowIcon.propTypes = {
  /** icon name */
  name: PropTypes.oneOf(['left', 'double-left', 'right', 'double-right']).isRequired
};
export default PaginationRowArrowIcon;
