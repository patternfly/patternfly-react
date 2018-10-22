import React from 'react';
import { Body } from 'reactabular-table';
import PropTypes from 'prop-types';
import { TableContext } from './Table';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rowKey: PropTypes.string
};

const defaultProps = {
  children: null,
  rowKey: 'id',
  className: ''
};

const ContextBody = ({ className, headerData, rows, rowKey, children, ...props }) => {
  let shiftKey = 0;
  shiftKey += headerData[0] && headerData[0].extraParams.onSelect ? 1 : 0;
  const mappedRows = headerData.length !== 0 && rows.map((oneRow, oneRowKey) => {
    return {
      ...oneRow,
      ...oneRow && (oneRow.cells || oneRow).reduce(
        (acc, curr, key) => ({
          ...acc,
          ...typeof curr === 'string' && headerData.hasOwnProperty(key) ? ({
            [headerData[shiftKey + key].property]: {
              title: curr
            }
          }) : curr
        }),
        { id: oneRowKey })
    }
  });

  return (
    <React.Fragment>
      {mappedRows && <Body {...props} rows={mappedRows} rowKey={rowKey} className={className} />}
    </React.Fragment>
  )
}

const TableBody = props => (
  <TableContext.Consumer>
    {({ headerData }) => <ContextBody {...props} headerData={headerData} />}
  </TableContext.Consumer>
)

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
