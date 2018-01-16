import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash.orderby';
import cx from 'classnames';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { bindMethods } from '../../../common/helpers';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter
} from '../index';
import { Table, TABLE_SORT_DIRECTION } from '../../Table';
import { DropdownKebab } from '../../DropdownKebab';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { PaginationRow, paginate, PAGINATION_VIEW } from '../../Pagination';
import { compose } from 'recompose';
import { mockRows } from './mockDataTableRows';

/**
 * Reactabular client side paging based on the following api docs:
 * https://reactabular.js.org/#/data/pagination
 */

export class MockClientPaginationTable extends React.Component {
  constructor(props) {
    super(props);

    const getSortingColumns = () => this.state.sortingColumns || {};

    const sortableTransform = sort.sort({
      getSortingColumns,
      onSort: selectedColumn => {
        this.setState({
          sortingColumns: sort.byColumn({
            sortingColumns: this.state.sortingColumns,
            sortingOrder: defaultSortingOrder,
            selectedColumn
          })
        });
      },
      // Use property or index dependening on the `sortingColumns` structure specified
      strategy: sort.strategies.byProperty
    });

    const sortingFormatter = sort.header({
      sortableTransform,
      getSortingColumns,
      strategy: sort.strategies.byProperty
    });

    // enables our custom header formatters extensions to reactabular
    this.customHeaderFormatters = customHeaderFormattersDefinition;

    bindMethods(this, [
      'customHeaderFormatters',
      'onPageInput',
      'onPerPageSelect',
      'onFirstPage',
      'onPreviousPage',
      'onNextPage',
      'onLastPage',
      'onRow',
      'onSelectAllRows',
      'onSelectRow'
    ]);

    this.state = {
      // Sort the first column in an ascending way by default.
      sortingColumns: {
        name: {
          direction: TABLE_SORT_DIRECTION.ASC,
          position: 0
        }
      },

      // column definitions
      columns: [
        {
          property: 'select',
          header: {
            label: 'Select all rows',
            props: {
              index: 0,
              rowSpan: 1,
              colSpan: 1
            },
            customFormatters: [selectionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 0
            },
            formatters: [
              (value, { rowData, rowIndex }) => {
                return selectionCellFormatter(
                  value,
                  { rowData, rowIndex },
                  this.onSelectRow
                );
              }
            ]
          }
        },
        {
          property: 'name',
          header: {
            label: 'Name',
            props: {
              index: 1,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 1
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'height',
          header: {
            label: 'Height',
            props: {
              index: 2,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 2
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'eye_color',
          header: {
            label: 'Eye Color',
            props: {
              index: 3,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 3
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'gender',
          header: {
            label: 'Gender',
            props: {
              index: 4,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 4
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'birth_year',
          header: {
            label: 'Birth Year',
            props: {
              index: 5,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 5
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'actions',
          header: {
            label: 'Actions',
            props: {
              index: 6,
              rowSpan: 1,
              colSpan: 2
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 6
            },
            formatters: [
              (value, { rowData }) => {
                return [
                  <Table.Actions key="0">
                    <Table.Button
                      onClick={() => alert('clicked ' + rowData.name)}
                    >
                      Actions
                    </Table.Button>
                  </Table.Actions>,
                  <Table.Actions key="1">
                    <DropdownKebab id="myKebab" pullRight>
                      <MenuItem>Action</MenuItem>
                      <MenuItem>Another Action</MenuItem>
                      <MenuItem>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem>Separated link</MenuItem>
                    </DropdownKebab>
                  </Table.Actions>
                ];
              }
            ]
          }
        }
      ],

      // rows and row selection state
      rows: mockRows,
      selectedRows: [],

      // pagination default states
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      }
    };
  }
  onPageInput(e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = e.target.value;
    this.setState({ pagination: newPaginationState });
  }
  onPerPageSelect(eventKey, e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    newPaginationState.page = 1;
    this.setState({ pagination: newPaginationState });
  }
  onFirstPage() {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = 1;
    this.setState({ pagination: newPaginationState });
  }
  onPreviousPage() {
    if (this.state.pagination.page > 1) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page--;
      this.setState({ pagination: newPaginationState });
    }
  }
  onNextPage() {
    const { page, perPage } = this.state.pagination;
    const totalPages = Math.ceil(mockRows.length / perPage);
    if (page < totalPages) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page++;
      this.setState({ pagination: newPaginationState });
    }
  }
  onLastPage() {
    const { page, perPage } = this.state.pagination;
    const totalPages = Math.ceil(mockRows.length / perPage);
    if (page < totalPages) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page = totalPages;
      this.setState({ pagination: newPaginationState });
    }
  }
  onSelectRow(event, row) {
    const { onRowsLogger } = this.props;
    const { rows, selectedRows } = this.state;
    const selectedRowIndex = rows.findIndex(r => r.id === row.id);
    if (selectedRowIndex > -1) {
      let updatedSelectedRows, updatedRow;
      if (row.selected) {
        updatedSelectedRows = selectedRows.filter(r => !(r === row.id));
        updatedRow = this.deselectRow(row);
      } else {
        selectedRows.push(row.id);
        updatedSelectedRows = selectedRows;
        updatedRow = this.selectRow(row);
      }
      rows[selectedRowIndex] = updatedRow;
      this.setState({
        rows: rows,
        selectedRows: updatedSelectedRows
      });
      onRowsLogger(rows.filter(r => r.selected));
    }
  }
  onSelectAllRows(event) {
    const { onRowsLogger } = this.props;
    const { rows, selectedRows } = this.state;
    const checked = event.target.checked;
    const currentRows = this.currentRows().rows;

    if (checked) {
      const updatedSelections = [
        ...new Set([...currentRows.map(r => r.id), ...selectedRows])
      ];
      const updatedRows = rows.map(r => {
        return updatedSelections.indexOf(r.id) > -1 ? this.selectRow(r) : r;
      });
      this.setState({
        // important: you must update `rows` to force a re-render and trigger `onRow` hook
        rows: updatedRows,
        selectedRows: updatedSelections
      });
      onRowsLogger(updatedRows.filter(r => r.selected));
    } else {
      const ids = currentRows.map(r => r.id);
      const updatedSelections = selectedRows.filter(r => {
        return !(ids.indexOf(r) > -1);
      });
      const updatedRows = rows.map(r => {
        return updatedSelections.indexOf(r.id) > -1 ? r : this.deselectRow(r);
      });
      this.setState({
        rows: updatedRows,
        selectedRows: updatedSelections
      });
      onRowsLogger(updatedRows.filter(r => r.selected));
    }
  }
  selectRow(row) {
    return Object.assign({}, row, { selected: true });
  }
  deselectRow(row) {
    return Object.assign({}, row, { selected: false });
  }
  currentRows() {
    const { rows, sortingColumns, columns, pagination } = this.state;
    return compose(
      paginate(pagination),
      sort.sorter({
        columns: columns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty
      })
    )(rows);
  }
  onRow(row, { rowIndex }) {
    const { selectedRows } = this.state;
    const selected = selectedRows.indexOf(row.id) > -1;
    return {
      className: cx({ selected: selected }),
      role: 'row'
    };
  }
  render() {
    const { columns, pagination, sortingColumns } = this.state;
    const sortedPaginatedRows = this.currentRows();

    return (
      <Grid fluid>
        <Table.PfProvider
          striped
          bordered
          hover
          dataTable
          columns={columns}
          components={{
            header: {
              cell: cellProps => {
                return this.customHeaderFormatters({
                  cellProps,
                  columns,
                  sortingColumns,
                  rows: sortedPaginatedRows.rows,
                  onSelectAllRows: this.onSelectAllRows
                });
              }
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body
            rows={sortedPaginatedRows.rows}
            rowKey="id"
            onRow={this.onRow}
          />
        </Table.PfProvider>
        <PaginationRow
          contentView
          viewType={PAGINATION_VIEW.TABLE}
          tableViewPagination
          pagination={pagination}
          amountOfPages={sortedPaginatedRows.amountOfPages}
          itemCount={sortedPaginatedRows.itemCount}
          itemsStart={sortedPaginatedRows.itemsStart}
          itemsEnd={sortedPaginatedRows.itemsEnd}
          onPerPageSelect={this.onPerPageSelect}
          onFirstPage={this.onFirstPage}
          onPreviousPage={this.onPreviousPage}
          onPageInput={this.onPageInput}
          onNextPage={this.onNextPage}
          onLastPage={this.onLastPage}
        />
      </Grid>
    );
  }
}
MockClientPaginationTable.propTypes = {
  onRowsLogger: PropTypes.func
};

export const mockClientPaginationTableSource = `
import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash.orderby';
import cx from 'classnames';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { bindMethods } from '../../../common/helpers';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter
} from '../index';
import { Table, TABLE_SORT_DIRECTION } from '../../Table';
import { DropdownKebab } from '../../DropdownKebab';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { PaginationRow, paginate, PAGINATION_VIEW } from '../../Pagination';
import { compose } from 'recompose';
import { mockRows } from './mockDataTableRows';

/**
 * Reactabular client side paging based on the following api docs:
 * https://reactabular.js.org/#/data/pagination
 */

export class MockClientPaginationTable extends React.Component {
  constructor(props) {
    super(props);

    const getSortingColumns = () => this.state.sortingColumns || {};

    const sortableTransform = sort.sort({
      getSortingColumns,
      onSort: selectedColumn => {
        this.setState({
          sortingColumns: sort.byColumn({
            sortingColumns: this.state.sortingColumns,
            sortingOrder: defaultSortingOrder,
            selectedColumn
          })
        });
      },
      // Use property or index dependening on the sortingColumns structure specified
      strategy: sort.strategies.byProperty
    });

    const sortingFormatter = sort.header({
      sortableTransform,
      getSortingColumns,
      strategy: sort.strategies.byProperty
    });

    // enables our custom header formatters extensions to reactabular
    this.customHeaderFormatters = customHeaderFormattersDefinition;

    bindMethods(this, [
      'customHeaderFormatters',
      'onPageInput',
      'onPerPageSelect',
      'onFirstPage',
      'onPreviousPage',
      'onNextPage',
      'onLastPage',
      'onRow',
      'onSelectAllRows',
      'onSelectRow'
    ]);

    this.state = {
      // Sort the first column in an ascending way by default.
      sortingColumns: {
        name: {
          direction: TABLE_SORT_DIRECTION.ASC,
          position: 0
        }
      },

      // column definitions
      columns: [
        {
          property: 'select',
          header: {
            label: 'Select all rows',
            props: {
              index: 0,
              rowSpan: 1,
              colSpan: 1
            },
            customFormatters: [selectionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 0
            },
            formatters: [
              (value, { rowData, rowIndex }) => {
                return selectionCellFormatter(
                  value,
                  { rowData, rowIndex },
                  this.onSelectRow
                );
              }
            ]
          }
        },
        {
          property: 'name',
          header: {
            label: 'Name',
            props: {
              index: 1,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 1
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'height',
          header: {
            label: 'Height',
            props: {
              index: 2,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 2
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'eye_color',
          header: {
            label: 'Eye Color',
            props: {
              index: 3,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 3
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'gender',
          header: {
            label: 'Gender',
            props: {
              index: 4,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 4
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'birth_year',
          header: {
            label: 'Birth Year',
            props: {
              index: 5,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 5
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'actions',
          header: {
            label: 'Actions',
            props: {
              index: 6,
              rowSpan: 1,
              colSpan: 2
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 6
            },
            formatters: [
              (value, { rowData }) => {
                return [
                  <Table.Actions key="0">
                    <Table.Button
                      onClick={() => alert('clicked ' + rowData.name)}
                    >
                      Actions
                    </Table.Button>
                  </Table.Actions>,
                  <Table.Actions key="1">
                    <DropdownKebab id="myKebab" pullRight>
                      <MenuItem>Action</MenuItem>
                      <MenuItem>Another Action</MenuItem>
                      <MenuItem>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem>Separated link</MenuItem>
                    </DropdownKebab>
                  </Table.Actions>
                ];
              }
            ]
          }
        }
      ],

      // rows and row selection state
      rows: mockRows,
      selectedRows: [],

      // pagination default states
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      }
    };
  }
  onPageInput(e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = e.target.value;
    this.setState({ pagination: newPaginationState });
  }
  onPerPageSelect(eventKey, e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    newPaginationState.page = 1;
    this.setState({ pagination: newPaginationState });
  }
  onFirstPage() {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = 1;
    this.setState({ pagination: newPaginationState });
  }
  onPreviousPage() {
    if (this.state.pagination.page > 1) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page--;
      this.setState({ pagination: newPaginationState });
    }
  }
  onNextPage() {
    const { page, perPage } = this.state.pagination;
    const totalPages = Math.ceil(mockRows.length / perPage);
    if (page < totalPages) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page++;
      this.setState({ pagination: newPaginationState });
    }
  }
  onLastPage() {
    const { page, perPage } = this.state.pagination;
    const totalPages = Math.ceil(mockRows.length / perPage);
    if (page < totalPages) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page = totalPages;
      this.setState({ pagination: newPaginationState });
    }
  }
  onSelectRow(event, row) {
    const { onRowsLogger } = this.props;
    const { rows, selectedRows } = this.state;
    const selectedRowIndex = rows.findIndex(r => r.id === row.id);
    if (selectedRowIndex > -1) {
      let updatedSelectedRows, updatedRow;
      if (row.selected) {
        updatedSelectedRows = selectedRows.filter(r => !(r === row.id));
        updatedRow = this.deselectRow(row);
      } else {
        selectedRows.push(row.id);
        updatedSelectedRows = selectedRows;
        updatedRow = this.selectRow(row);
      }
      rows[selectedRowIndex] = updatedRow;
      this.setState({
        rows: rows,
        selectedRows: updatedSelectedRows
      });
      onRowsLogger(rows.filter(r => r.selected));
    }
  }
  onSelectAllRows(event) {
    const { onRowsLogger } = this.props;
    const { rows, selectedRows } = this.state;
    const checked = event.target.checked;
    const currentRows = this.currentRows().rows;

    if (checked) {
      const updatedSelections = [
        ...new Set([...currentRows.map(r => r.id), ...selectedRows])
      ];
      const updatedRows = rows.map(r => {
        return updatedSelections.indexOf(r.id) > -1 ? this.selectRow(r) : r;
      });
      this.setState({
        // important: you must update rows to force a re-render and trigger onRow hook
        rows: updatedRows,
        selectedRows: updatedSelections
      });
      onRowsLogger(updatedRows.filter(r => r.selected));
    } else {
      const ids = currentRows.map(r => r.id);
      const updatedSelections = selectedRows.filter(r => {
        return !(ids.indexOf(r) > -1);
      });
      const updatedRows = rows.map(r => {
        return updatedSelections.indexOf(r.id) > -1 ? r : this.deselectRow(r);
      });
      this.setState({
        rows: updatedRows,
        selectedRows: updatedSelections
      });
      onRowsLogger(updatedRows.filter(r => r.selected));
    }
  }
  selectRow(row) {
    return Object.assign({}, row, { selected: true });
  }
  deselectRow(row) {
    return Object.assign({}, row, { selected: false });
  }
  currentRows() {
    const { rows, sortingColumns, columns, pagination } = this.state;
    return compose(
      paginate(pagination),
      sort.sorter({
        columns: columns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty
      })
    )(rows);
  }
  onRow(row, { rowIndex }) {
    const { selectedRows } = this.state;
    const selected = selectedRows.indexOf(row.id) > -1;
    return {
      className: cx({ selected: selected }),
      role: 'row'
    };
  }
  render() {
    const { columns, pagination, sortingColumns } = this.state;
    const sortedPaginatedRows = this.currentRows();

    return (
      <Grid fluid>
        <Table.PfProvider
          striped
          bordered
          hover
          dataTable
          columns={columns}
          components={{
            header: {
              cell: cellProps => {
                return this.customHeaderFormatters({
                  cellProps,
                  columns,
                  sortingColumns,
                  rows: sortedPaginatedRows.rows,
                  onSelectAllRows: this.onSelectAllRows
                });
              }
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body
            rows={sortedPaginatedRows.rows}
            rowKey="id"
            onRow={this.onRow}
          />
        </Table.PfProvider>
        <PaginationRow
          contentView
          viewType={PAGINATION_VIEW.TABLE}
          pagination={pagination}
          amountOfPages={sortedPaginatedRows.amountOfPages}
          itemCount={sortedPaginatedRows.itemCount}
          itemsStart={sortedPaginatedRows.itemsStart}
          itemsEnd={sortedPaginatedRows.itemsEnd}
          onPerPageSelect={this.onPerPageSelect}
          onFirstPage={this.onFirstPage}
          onPreviousPage={this.onPreviousPage}
          onPageInput={this.onPageInput}
          onNextPage={this.onNextPage}
          onLastPage={this.onLastPage}
        />
      </Grid>
    );
  }
}
MockClientPaginationTable.propTypes = {
  onRowsLogger: PropTypes.func
};
`;
