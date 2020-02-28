import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * TableSelectionCell component for Patternfly React
 */
const TableSelectionCell = ({ children, className, ...props }) => {
  const classes = classNames('table-view-pf-select', className);
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
TableSelectionCell.defaultProps = {
  children: null,
  className: ''
};
export default TableSelectionCell;
