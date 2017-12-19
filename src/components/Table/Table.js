import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { TABLE_CONFIG } from './constants';

class Table extends React.Component {
  isEmpty() {
    return this.props.data.length === 0;
  }

  columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
    return '';
  }

  customHeaderClass(fieldValue, row, rowIdx, colIdx) {
    return 'sorting_asc';
  }
  onSortChange = (sortName, sortOrder) => {};
  renderCaret = (direction, fieldName) => {
    return null;
  };

  render() {
    const { columns, data, striped, bordered, hover, dataSort } = this.props;
    const tableHeaderClass = cx({ dataTable: dataSort });
    const tableBodyClass = cx({ dataTable: dataSort });
    const isEmpty = this.isEmpty();

    let options = {};
    if (dataSort && !isEmpty) {
      options = {
        onSortChange: this.onSortChange,
        defaultSortName: columns[0].accessor,
      };
    }

    return isEmpty ? null : (
      <BootstrapTable
        striped={striped}
        bordered={bordered}
        data={data}
        hover={hover}
        tableHeaderClass={tableHeaderClass}
        tableBodyClass={tableBodyClass}
        options={options}
      >
        {columns.map(col => (
          <TableHeaderColumn
            key={col.header}
            width={col.width}
            isKey={col.isKey}
            columnTitle={col.tooltip}
            headerAlign={col.headerAlign}
            dataAlign={col.dataAlign}
            dataField={col.accessor}
            dataFormat={col.formatter ? col.formatter : undefined}
            hidden={col.hidden}
            dataSort={dataSort}
            className={this.customHeaderClass}
            columnClassName={this.columnClassNameFormat}
            caretRender={this.renderCaret}
          >
            <span>{col.header}</span>
          </TableHeaderColumn>
        ))}
      </BootstrapTable>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      headerAlign: PropTypes.oneOf(TABLE_CONFIG.ALIGNMENTS),
      dataAlign: PropTypes.oneOf(TABLE_CONFIG.ALIGNMENTS),
    }),
  ),
};
export default Table;
