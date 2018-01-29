import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { TABLE_ALIGN, TABLE_ALIGNMENT_TYPES } from './constants';
/**
 * TableCell component for Patternfly React
 */
const TableCell = ({ children, className, align, ...props }) => {
  const classes = cx(
    {
      'text-right': align === TABLE_ALIGN.RIGHT,
      'text-center': align === TABLE_ALIGN.CENTER
    },
    className
  );
  return (
    <td className={classes} {...props}>
      {children}
    </td>
  );
};
TableCell.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Cell alignment */
  align: PropTypes.oneOf(TABLE_ALIGNMENT_TYPES)
};
export default TableCell;
