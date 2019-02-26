import React from 'react';
import { Body } from 'reactabular-table';
import PropTypes from 'prop-types';
import { TableContext } from './Table';
import { isRowExpanded } from './utils';

const propTypes = {
  /** Additional classes for table body. */
  className: PropTypes.string,
  /** Specify key which should be used for labeling each row. */
  rowKey: PropTypes.string,
  /** Function that is fired when user clicks on row.  */
  onRowClick: PropTypes.func
};

const defaultProps = {
  rowKey: 'id',
  className: '',
  onRowClick: () => undefined
};

class ContextBody extends React.Component {
  onRow = (row, rowProps) => {
    const { onRowClick } = this.props;
    return {
      row,
      rowProps,
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
    const { className, headerData, rows, rowKey, children, onRowClick, ...props } = this.props;
    const mappedRows =
      headerData.length > 0 &&
      rows.map((oneRow, oneRowKey) => ({
        ...oneRow,
        ...this.mapCells(headerData, oneRow, oneRowKey),
        isExpanded: isRowExpanded(oneRow, rows),
        isFirst: oneRowKey === 0,
        isLast: oneRowKey === rows.length - 1
      }));

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
    {({ headerData, rows }) => <ContextBody headerData={headerData} rows={rows} {...props} />}
  </TableContext.Consumer>
);

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
