import PropTypes from 'prop-types';

// wraps the default header definitions and adds support for `customFormatters`
const customHeaderFormattersDefinition = ({
  cellProps,
  columns,
  sortingColumns,
  rows,
  onSelectAllRows,
  onSort
}) => {
  const { index } = cellProps;
  const column = columns[index];
  const customFormatters = column.header.customFormatters;

  if (customFormatters) {
    return customFormatters.reduce(
      (params, formatter) => ({
        value: formatter(params)
      }),
      { cellProps, column, sortingColumns, rows, onSelectAllRows, onSort }
    ).value;
  } else {
    return cellProps.children;
  }
};
customHeaderFormattersDefinition.propTypes = {
  /** column header cell props */
  cellProps: PropTypes.object,
  /** column definitions */
  columns: PropTypes.array,
  /** sorting object definition */
  sortingColumns: PropTypes.object,
  /** current table rows */
  rows: PropTypes.array,
  /** on select all rows callback */
  onSelectAllRows: PropTypes.func,
  /** onSort callback */
  onSort: PropTypes.func
};
export default customHeaderFormattersDefinition;
