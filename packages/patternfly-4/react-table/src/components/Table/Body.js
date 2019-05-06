import React from 'react';
import { Body } from './base';
import PropTypes from 'prop-types';
import { TableContext } from './Table';
import { isRowExpanded } from './utils';

const propTypes = {
  /** Additional classes for table body. */
  className: PropTypes.string,
  /** Specify key which should be used for labeling each row. */
  rowKey: PropTypes.string,
  /** Function that is fired when user clicks on row.  */
  onRowClick: PropTypes.func,
  /** Virtualized rows (optional provided in place of rows) */
  rowsToRender: PropTypes.array
};

const defaultProps = {
  rowKey: 'id',
  className: '',
  onRowClick: () => undefined,
  rowsToRender: undefined
};

const flagVisibility = rows => {
  const visibleRows = rows.filter(oneRow => !oneRow.parent || oneRow.isExpanded);
  if (visibleRows.length > 0) {
    visibleRows[0].isFirstVisible = true;
    visibleRows[visibleRows.length - 1].isLastVisible = true;
  }
};

class ContextBody extends React.Component {
  onRow = (row, rowProps) => {
    const { onRowClick, onRow } = this.props;
    const extendedRowProps = {
      ...rowProps,
      ...(onRow ? onRow(row, rowProps) : {})
    };
    return {
      row,
      rowProps: extendedRowProps,
      onMouseDown: event => {
        const computedData = {
          isInput: event.target.tagName !== 'INPUT',
          isButton: event.target.tagName !== 'BUTTON'
        };
        onRowClick(event, row, rowProps, computedData);
      }
    };
  };

  mapCells = (headerData, row, rowKey) => {
    // column indexes start after generated optional columns
    let additionalColsIndexShift = headerData[0].extraParams.firstUserColumnIndex;

    return {
      ...(row &&
        (row.cells || row).reduce(
          (acc, cell, cellIndex) => {
            const isCellObject = cell === Object(cell);

            const mappedCell = {
              [headerData[cellIndex + additionalColsIndexShift].property]: {
                title: isCellObject ? cell.title : cell,
                props: {
                  isVisible: true,
                  ...(isCellObject ? cell.props : null)
                }
              }
            };

            // increment the shift index when a cell spans multiple columns
            if (isCellObject && cell.props && cell.props.colSpan) {
              additionalColsIndexShift += cell.props.colSpan - 1;
            }
            return {
              ...acc,
              ...mappedCell
            };
          },
          { id: row.id !== undefined ? row.id : rowKey }
        ))
    };
  };

  render() {
    const { className, headerData, rows, rowKey, rowsToRender, children, onRowClick, ...props } = this.props;

    let mappedRows;
    if (headerData.length > 0) {
      mappedRows = rows.map((oneRow, oneRowKey) => ({
        ...oneRow,
        ...this.mapCells(headerData, oneRow, oneRowKey),
        isExpanded: isRowExpanded(oneRow, rows),
        isFirst: oneRowKey === 0,
        isLast: oneRowKey === rows.length - 1,
        isFirstVisible: false,
        isLastVisible: false
      }));
      flagVisibility(mappedRows);
    }

    return (
      <React.Fragment>
        {mappedRows && (
          <Body
            {...props}
            mappedRows={mappedRows}
            rows={mappedRows}
            onRow={this.onRow}
            rowKey={rowKey}
            className={className}
          />
        )}
      </React.Fragment>
    );
  }
}

const TableBody = props => (
  <TableContext.Consumer>
    {({ headerData, rows }) => <ContextBody headerData={headerData} rows={props.rowsToRender || rows} {...props} />}
  </TableContext.Consumer>
);

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
