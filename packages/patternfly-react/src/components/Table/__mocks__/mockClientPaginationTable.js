import React from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import classNames from 'classnames';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { compose } from 'recompose';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { PaginationRow, paginate, PAGINATION_VIEW } from '../../Pagination';
import { mockRows } from './mockRows';

/**
 * Reactabular client side paging based on the following api docs:
 * https://reactabular.js.org/#/data/pagination
 */

export class MockClientPaginationTable extends React.Component {
  static deselectRow(row) {
    return Object.assign({}, row, { selected: false });
  }
  static selectRow(row) {
    return Object.assign({}, row, { selected: true });
  }
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
            label: 'Vyberte všechny řádky',
            props: {
              index: 0,
              rowSpan: 1,
              colSpan: 1,
              id: 'vybrat vše'
            },
            customFormatters: [selectionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 0
            },
            formatters: [
              (value, { rowData, rowIndex }) =>
                selectionCellFormatter(
                  { rowData, rowIndex },
                  this.onSelectRow,
                  `vybrat${rowIndex}`,
                  `vyberte řádek ${rowIndex}`
                )
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
              (value, { rowData }) => [
                <Table.Actions key="0">
                  <Table.Button onClick={() => alert(`clicked ${rowData.name}`)}>Actions</Table.Button>
                </Table.Actions>,
                <Table.Actions key="1">
                  <Table.DropdownKebab id="myKebab" pullRight>
                    <MenuItem>Action</MenuItem>
                    <MenuItem>Another Action</MenuItem>
                    <MenuItem>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem>Separated link</MenuItem>
                  </Table.DropdownKebab>
                </Table.Actions>
              ]
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
      },

      // page input value
      pageChangeValue: 1
    };
  }
  onFirstPage = () => {
    this.setPage(1);
  };
  onLastPage = () => {
    const { page } = this.state.pagination;
    const totalPages = this.totalPages();
    if (page < totalPages) {
      this.setPage(totalPages);
    }
  };
  onNextPage = () => {
    const { page } = this.state.pagination;
    if (page < this.totalPages()) {
      this.setPage(this.state.pagination.page + 1);
    }
  };
  onPageInput = e => {
    this.setState({ pageChangeValue: e.target.value });
  };
  onPerPageSelect = (eventKey, e) => {
    const newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    newPaginationState.page = 1;
    this.setState({ pagination: newPaginationState });
  };
  onPreviousPage = () => {
    if (this.state.pagination.page > 1) {
      this.setPage(this.state.pagination.page - 1);
    }
  };
  onRow = (row, { rowIndex }) => {
    const { selectedRows } = this.state;
    const selected = selectedRows.indexOf(row.id) > -1;
    return {
      className: classNames({ selected }),
      role: 'row'
    };
  };
  onSelectAllRows = event => {
    const { onRowsLogger } = this.props;
    const { rows, selectedRows } = this.state;
    const { checked } = event.target;
    const currentRows = this.currentRows().rows;

    if (checked) {
      const updatedSelections = [...new Set([...currentRows.map(r => r.id), ...selectedRows])];
      const updatedRows = rows.map(
        r => (updatedSelections.indexOf(r.id) > -1 ? MockClientPaginationTable.selectRow(r) : r)
      );
      this.setState({
        // important: you must update rows to force a re-render and trigger onRow hook
        rows: updatedRows,
        selectedRows: updatedSelections
      });
      onRowsLogger(updatedRows.filter(r => r.selected));
    } else {
      const ids = currentRows.map(r => r.id);
      const updatedSelections = selectedRows.filter(r => !(ids.indexOf(r) > -1));
      const updatedRows = rows.map(
        r => (updatedSelections.indexOf(r.id) > -1 ? r : MockClientPaginationTable.deselectRow(r))
      );
      this.setState({
        rows: updatedRows,
        selectedRows: updatedSelections
      });
      onRowsLogger(updatedRows.filter(r => r.selected));
    }
  };
  onSelectRow = (event, row) => {
    const { onRowsLogger } = this.props;
    const { rows, selectedRows } = this.state;
    const selectedRowIndex = rows.findIndex(r => r.id === row.id);
    if (selectedRowIndex > -1) {
      let updatedSelectedRows;
      let updatedRow;
      if (row.selected) {
        updatedSelectedRows = selectedRows.filter(r => !(r === row.id));
        updatedRow = MockClientPaginationTable.deselectRow(row);
      } else {
        selectedRows.push(row.id);
        updatedSelectedRows = selectedRows;
        updatedRow = MockClientPaginationTable.selectRow(row);
      }
      rows[selectedRowIndex] = updatedRow;
      this.setState({
        rows,
        selectedRows: updatedSelectedRows
      });
      onRowsLogger(rows.filter(r => r.selected));
    }
  };
  onSubmit = () => {
    this.setPage(this.state.pageChangeValue);
  };
  setPage = value => {
    const page = Number(value);
    if (!Number.isNaN(value) && value !== '' && page > 0 && page <= this.totalPages()) {
      const newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page = page;
      this.setState({ pagination: newPaginationState, pageChangeValue: page });
    }
  };
  currentRows() {
    const { rows, sortingColumns, columns, pagination } = this.state;
    return compose(
      paginate(pagination),
      sort.sorter({
        columns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty
      })
    )(rows);
  }
  totalPages = () => {
    const { perPage } = this.state.pagination;
    return Math.ceil(mockRows.length / perPage);
  };
  render() {
    const { columns, pagination, sortingColumns, pageChangeValue } = this.state;
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
              cell: cellProps =>
                this.customHeaderFormatters({
                  cellProps,
                  columns,
                  sortingColumns,
                  rows: sortedPaginatedRows.rows,
                  onSelectAllRows: this.onSelectAllRows
                })
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body rows={sortedPaginatedRows.rows} rowKey="id" onRow={this.onRow} />
        </Table.PfProvider>
        <PaginationRow
          viewType={PAGINATION_VIEW.TABLE}
          pagination={pagination}
          pageInputValue={pageChangeValue}
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
          onSubmit={this.onSubmit}
        />
      </Grid>
    );
  }
}
MockClientPaginationTable.propTypes = {
  onRowsLogger: PropTypes.func.isRequired
};

export const mockClientPaginationTableSource = `
import React from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';
import classNames from 'classnames';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { PaginationRow, paginate, PAGINATION_VIEW } from '../../Pagination';
import { compose } from 'recompose';
import { mockRows } from './mockRows';

/**
 * Reactabular client side paging based on the following api docs:
 * https://reactabular.js.org/#/data/pagination
 */

export class MockClientPaginationTable extends React.Component {
  static selectRow(row) {
    return Object.assign({}, row, { selected: true });
  }
  static deselectRow(row) {
    return Object.assign({}, row, { selected: false });
  }

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
            label: 'Vyberte všechny řádky',
            props: {
              index: 0,
              rowSpan: 1,
              colSpan: 1,
              id: 'vybrat vše'
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
                  { rowData, rowIndex },
                  this.onSelectRow,
                  \`vybrat \${rowIndex}\`, \`vyberte řádek \${rowIndex}\`
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
                    <Table.DropdownKebab id="myKebab" pullRight>
                      <MenuItem>Action</MenuItem>
                      <MenuItem>Another Action</MenuItem>
                      <MenuItem>Something else here</MenuItem>
                      <MenuItem divider />
                      <MenuItem>Separated link</MenuItem>
                    </Table.DropdownKebab>
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
      },

      // page input value
      pageChangeValue: 1
    };
  }
  totalPages = () => {
    const { perPage } = this.state.pagination;
    return Math.ceil(mockRows.length / perPage);
  };
  onPageInput = e => {
    this.setState({ pageChangeValue: e.target.value });
  };
  onSubmit = () => {
    this.setPage(this.state.pageChangeValue);
  };
  setPage = value => {
    const page = Number(value);
    if (
      !Number.isNaN(value) &&
      value !== '' &&
      page > 0 &&
      page <= this.totalPages()
    ) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page = page;
      this.setState({ pagination: newPaginationState, pageChangeValue: page });
    }
  }
  onPerPageSelect = (eventKey, e) => {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    newPaginationState.page = 1;
    this.setState({ pagination: newPaginationState });
  };
  onFirstPage = () => {
    this.setPage(1);
  };
  onPreviousPage = () => {
    if (this.state.pagination.page > 1) {
      this.setPage(this.state.pagination.page - 1);
    }
  };
  onNextPage () => {
    const { page } = this.state.pagination;
    if (page < this.totalPages()) {
      this.setPage(this.state.pagination.page + 1);
    }
  };
  onLastPage = () => {
    const { page } = this.state.pagination;
    const totalPages = this.totalPages();
    if (page < totalPages) {
      this.setPage(totalPages);
    }
  };
  onSelectRow = (event, row) => {
    const { onRowsLogger } = this.props;
    const { rows, selectedRows } = this.state;
    const selectedRowIndex = rows.findIndex(r => r.id === row.id);
    if (selectedRowIndex > -1) {
      let updatedSelectedRows, updatedRow;
      if (row.selected) {
        updatedSelectedRows = selectedRows.filter(r => !(r === row.id));
        updatedRow = MockClientPaginationTable.deselectRow(row);
      } else {
        selectedRows.push(row.id);
        updatedSelectedRows = selectedRows;
        updatedRow = MockClientPaginationTable.selectRow(row);
      }
      rows[selectedRowIndex] = updatedRow;
      this.setState({
        rows: rows,
        selectedRows: updatedSelectedRows
      });
      onRowsLogger(rows.filter(r => r.selected));
    }
  };
  onSelectAllRows = event => {
    const { onRowsLogger } = this.props;
    const { rows, selectedRows } = this.state;
    const checked = event.target.checked;
    const currentRows = this.currentRows().rows;

    if (checked) {
      const updatedSelections = [
        ...new Set([...currentRows.map(r => r.id), ...selectedRows])
      ];
      const updatedRows = rows.map(r => {
        return updatedSelections.indexOf(r.id) > -1 ? MockClientPaginationTable.selectRow(r) : r;
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
        return updatedSelections.indexOf(r.id) > -1 ? r : MockClientPaginationTable.deselectRow(r);
      });
      this.setState({
        rows: updatedRows,
        selectedRows: updatedSelections
      });
      onRowsLogger(updatedRows.filter(r => r.selected));
    }
  };
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
      className: classNames({ selected: selected }),
      role: 'row'
    };
  }
  render() {
    const { columns, pagination, sortingColumns, pageChangeValue } = this.state;
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
          viewType={PAGINATION_VIEW.TABLE}
          pagination={pagination}
          pageInputValue={pageChangeValue}
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
          onSubmit={this.onSubmit}
        />
      </Grid>
    );
  }
}
MockClientPaginationTable.propTypes = {
  onRowsLogger: PropTypes.func.isRequired
};
`;
