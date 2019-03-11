import React from 'react';
import { Body } from 'reactabular-table';
import PropTypes from 'prop-types';
import { TableContext } from './Table';

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
  onRow = (row, props) => {
    const { onRowClick } = this.props;
    return {
      isExpanded: row.isExpanded,
      isOpen: row.isOpen,
      onClick: event => {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON') {
          onRowClick(event, row, props);
        }
      }
    };
  };

  parentsExpanded(parentId) {
    const { rows } = this.props;
    return rows[parentId].hasOwnProperty('parent')
      ? this.parentsExpanded(rows[parentId].parent)
      : rows[parentId].isOpen;
  }

  mapCells = (row, rowKey) => {
    const { headerData } = this.props;
    let shiftKey = Boolean(headerData[0] && headerData[0].extraParams.onSelect);
    shiftKey += Boolean(headerData[0] && headerData[0].extraParams.onCollapse);
    return {
      ...row,
      ...(row &&
        (row.cells || row).reduce(
          (acc, curr, key) => {
            const currShift = shiftKey;
            if (curr.props && curr.props.colSpan) {
              shiftKey += shiftKey + curr.props && curr.props.colSpan - 1;
            }
            return {
              ...acc,
              ...{
                [headerData[currShift + key].property]: {
                  title: curr.title || curr,
                  props: {
                    isVisible: true,
                    ...curr.props
                  }
                }
              }
            };
          },
          { id: row.id !== undefined ? row.id : rowKey }
        ))
    };
  };

  render() {
    const { className, headerData, rows, rowKey, children, onRowClick, ...props } = this.props;
    const mappedRows =
      headerData.length !== 0 &&
      rows.map((oneRow, oneRowKey) => ({
        ...this.mapCells(oneRow, oneRowKey),
        ...(oneRow.parent !== undefined
          ? {
              isExpanded: this.parentsExpanded(oneRow.parent) && rows[oneRow.parent].isOpen
            }
          : {})
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
    {({ headerData, rows }) => <ContextBody {...props} headerData={headerData} rows={rows} />}
  </TableContext.Consumer>
);

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
