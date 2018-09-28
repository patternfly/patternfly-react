import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TableGridHead from './TableGridHead';
import TableGridColumnHeader from './TableGridColumnHeader';
import TableGridBody from './TableGridBody';
import TableGridRow from './TableGridRow';
import TableGridCol from './TableGridCol';

/**
 * TableGrid Component for PatternFly
 */

const TableGrid = ({ children, className, bordered, selectType, ...props }) => {
  const classes = classNames(
    {
      'table-grid-pf': true,
      bordered,
      'row-select': selectType === 'row',
      'cell-select': selectType === 'cell',
      'checkbox-select': selectType === 'checkbox'
    },
    className
  );
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
  bordered: PropTypes.bool,
  /** Type of selection for the grid */
  selectType: PropTypes.oneOf(['row', 'cell', 'checkbox', 'none'])
};
TableGrid.defaultProps = {
  children: null,
  className: '',
  bordered: true,
  selectType: 'none'
};

TableGrid.Head = TableGridHead;
TableGrid.ColumnHeader = TableGridColumnHeader;
TableGrid.Body = TableGridBody;
TableGrid.Row = TableGridRow;
TableGrid.Col = TableGridCol;

export default TableGrid;
