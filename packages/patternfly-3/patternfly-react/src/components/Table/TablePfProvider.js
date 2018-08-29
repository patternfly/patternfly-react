import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Table } from './Table';
/**
 * TablePfProvider component for Patternfly React
 */
const TablePfProvider = ({
  children,
  className,
  dataTable,
  striped,
  bordered,
  inlineEdit,
  hover,
  condensed,
  components,
  ...props
}) => {
  const headerCell = cellProps => cellProps.children;
  const tableCell = cellProps => cellProps.children;
  const tableRow = rowProps => <tr {...rowProps}>{rowProps.children}</tr>;
  tableRow.shouldComponentUpdate = true;

  components.header = Object.assign({ cell: headerCell }, components.header || {});
  components.body = Object.assign({ cell: tableCell, row: tableRow }, components.body || {});

  const classes = classNames(
    {
      table: true,
      dataTable,
      'table-striped': striped,
      'table-bordered': bordered,
      'table-hover': hover,
      'table-condensed': condensed,
      'pf-table-inline-edit': inlineEdit
    },
    className
  );
  const attributes = {};
  if (dataTable) {
    attributes.role = 'grid';
  }

  return (
    <Table.Provider className={classes} renderers={components} {...props} {...attributes}>
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
  /** apply pf-table-inline-edit class */
  inlineEdit: PropTypes.bool,
  /** reactabular components override */
  components: PropTypes.object
};
TablePfProvider.defaultProps = {
  children: null,
  className: '',
  dataTable: false,
  striped: false,
  bordered: false,
  hover: false,
  condensed: false,
  inlineEdit: false,
  components: {}
};
export default TablePfProvider;
