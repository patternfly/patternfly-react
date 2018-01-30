import PropTypes from 'prop-types'
import React from 'react'

export const DataTable = ({ children, className, rowGetter, rowKeys }) => (
  <table className="table table-striped table-bordered table-hover">
    <thead>
      <tr>
        {React.Children.map(children, child => {
          return <th>{child.props.label}</th>
        })}
      </tr>
    </thead>
    <tbody>
      {rowKeys.map(rowKey => (
        <tr key={rowKey}>
          {React.Children.map(children, child => {
            const { columnData, cellDataGetter, dataKey } = child.props
            return (
              <td key={dataKey}>
                {cellDataGetter({
                  columnData,
                  dataKey,
                  rowData: rowGetter(rowKey)
                })}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  </table>
)
DataTable.propTypes = { rowGetter: PropTypes.func.isRequired }

const defaultCellDataGetter = ({ columnData, dataKey, rowData }) =>
  rowData[dataKey]

export class Column extends React.Component {}
Column.propTypes = { cellDataGetter: PropTypes.func.isRequired }
Column.defaultProps = {
  cellDataGetter: defaultCellDataGetter
}
