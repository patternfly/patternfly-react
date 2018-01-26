import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Table } from './index';
/**
 * TablePfProvider component for Patternfly React
 */
const TablePfProvider = ({
  children,
  className,
  dataTable,
  striped,
  bordered,
  hover,
  condensed,
  components,
  ...props
}) => {
  const headerCell = cellProps => {
    return cellProps.children;
  };
  const tableCell = cellProps => {
    return cellProps.children;
  };
  let mergedComponents = Object.assign(
    { header: { cell: headerCell }, body: { cell: tableCell } },
    components
  );
  const classes = cx(
    {
      table: true,
      dataTable: dataTable,
      'table-striped': striped,
      'table-bordered': bordered,
      'table-hover': hover,
      'table-condensed': condensed
    },
    className
  );
  let attributes = {};
  if (dataTable) {
    attributes.role = 'grid';
  }

  return (
    <Table.Provider
      className={classes}
      components={mergedComponents}
      {...props}
      {...attributes}
    >
      {children}
    </Table.Provider>
  );
};
TablePfProvider.propTypes = {
  /** Children nodes  */
  children: PropTypes.node,
  /** Additional css classes */
  className: PropTypes.string,
  /** apply dataTable class */
  dataTable: PropTypes.bool,
  /** apply Striped class */
  striped: PropTypes.bool,
  /** apply Bordered class */
  bordered: PropTypes.bool,
  /** apply Hover class */
  hover: PropTypes.bool,
  /** apply Condensed class */
  condensed: PropTypes.bool,
  /** reactabular components override */
  components: PropTypes.object
};
export default TablePfProvider;
