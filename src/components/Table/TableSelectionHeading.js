import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * TableSelectionHeading component for Patternfly React
 */
const TableSelectionHeading = ({ children, className, ...props }) => {
  const classes = classNames('table-view-pf-select', className);
  return (
    <th className={classes} {...props}>
      {children}
    </th>
  );
};
TableSelectionHeading.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
TableSelectionHeading.defaultProps = {
  children: null,
  className: ''
};
export default TableSelectionHeading;
