import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableGridHead from './TableGridHead';
import TableGridColumnHeader from './TableGridColumnHeader';
import TableGridBody from './TableGridBody';
import TableGridRow from './TableGridRow';

/**
 * TableGrid Component for PatternFly
 */

const TableGrid = ({ children, className, bordered, ...props }) => {
  const classes = classNames('table-grid-pf', { bordered }, className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

TableGrid.propTypes = {
  /** Children nodes */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** Flag to use a bordered grid */
  bordered: PropTypes.bool
};
TableGrid.defaultProps = {
  children: null,
  className: '',
  bordered: true
};

TableGrid.Head = TableGridHead;
TableGrid.ColumnHeader = TableGridColumnHeader;
TableGrid.Body = TableGridBody;
TableGrid.Row = TableGridRow;

export default TableGrid;
