import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TABLE_ALIGN, TABLE_ALIGNMENT_TYPES } from './TableConstants';
/**
 * TableCell component for Patternfly React
 */
const TableCell = ({ children, className, align, ...props }) => {
  const classes = classNames(
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
TableCell.defaultProps = {
  children: null,
  className: '',
  align: TABLE_ALIGN.DEFAULT
};
export default TableCell;
