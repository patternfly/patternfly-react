import React from 'react';
import PropTypes from 'prop-types';
import { AngleLeftIcon, AngleDoubleLeftIcon, AngleRightIcon, AngleDoubleRightIcon } from '@patternfly/react-icons';

const arrowIcon = {
  left: AngleLeftIcon,
  'double-left': AngleDoubleLeftIcon,
  right: AngleRightIcon,
  'double-right': AngleDoubleRightIcon
};

/**
 * PaginationRowArrowIcon component for Patternfly React
 */
const PaginationRowArrowIcon = ({ name, ...props }) => {
  const Icon = arrowIcon[name];
  return <Icon className="i" />;
};
PaginationRowArrowIcon.propTypes = {
  /** icon name */
  name: PropTypes.oneOf(Object.keys(arrowIcon)).isRequired
};
export default PaginationRowArrowIcon;
