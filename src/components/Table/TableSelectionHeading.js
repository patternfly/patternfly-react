import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * TableSelectionHeading component for Patternfly React
 */
const TableSelectionHeading = ({ children, className, ...props }) => {
  const classes = cx('table-view-pf-select', className);
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
export default TableSelectionHeading;
