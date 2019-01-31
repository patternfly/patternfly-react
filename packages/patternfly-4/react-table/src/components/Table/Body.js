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
    return ({
      isExpanded: row.isExpanded,
      isOpen: row.isOpen,
      onClick: (event) => onRowClick(event, row, props)
    });
  }

  parentsExpanded(parentId) {
    const { rows } = this.props;
    return rows[parentId].hasOwnProperty('parent') ? this.parentsExpanded(rows[parentId].parent) : rows[parentId].isOpen;
  }

  render() {
    const { className, headerData, rows, rowKey, children, onRowClick, ...props } = this.props;
    let shiftKey = 0;
    shiftKey += headerData[0] && headerData[0].extraParams.onSelect ? 1 : 0;
    shiftKey += headerData[0] && headerData[0].extraParams.onCollapse ? 1 : 0;
    const mappedRows = headerData.length !== 0 && rows.map((oneRow, oneRowKey) => {
      return {
        ...oneRow,
        ...oneRow && (oneRow.cells || oneRow).reduce(
          (acc, curr, key) => {
            return ({
              ...acc,
              ...{
                [headerData[shiftKey + key].property]: {
                  title: curr.title || curr,
                  props: curr.props
                }
              }
            })
          },
          { id: oneRowKey }),
        ...oneRow.parent !== undefined ? {
          isExpanded: this.parentsExpanded(oneRow.parent) && rows[oneRow.parent].isOpen
        } : {},
      }
    });
    return (
      <React.Fragment>
        {mappedRows && <Body {...props} rows={mappedRows} onRow={this.onRow} rowKey={rowKey} className={className} />}
      </React.Fragment>
    )
  }
}

const TableBody = props => (
  <TableContext.Consumer>
    {({ headerData, rows }) => <ContextBody {...props} headerData={headerData} rows={rows} />}
  </TableContext.Consumer>
)

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
