import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * TableSelectionCell component for Patternfly React
 */
const TableSelectionCell = ({ children, className, ...props }) => {
  const classes = cx('table-view-pf-select', className);
  return (
    <td className={classes} {...props}>
      {children}
    </td>
  );
};
TableSelectionCell.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string
};
export default TableSelectionCell;
