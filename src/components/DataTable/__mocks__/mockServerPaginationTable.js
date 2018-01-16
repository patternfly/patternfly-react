import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as resolve from 'table-resolver';
import { bindMethods } from '../../../common/helpers';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter
} from '../index';
import { Table, TABLE_SORT_DIRECTION } from '../../Table';
import { DropdownKebab } from '../../DropdownKebab';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { PaginationRow, PAGINATION_VIEW } from '../../Pagination';
import MockServerApi from './mockServerApi';

export class MockServerPaginationTable extends React.Component {
  constructor(props) {
    super(props);

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
      'onSelectRow',
      'onSort'
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
      rows: [],
      selectedRows: [],

      // pagination default states
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      },

      // server side pagination values
      amountOfPages: 0,
      itemCount: 0,
      itemsStart: 0,
      itemsEnd: 0
    };
  }

  componentWillMount() {
    const { sortingColumns, pagination } = this.state;
    this.getPage(sortingColumns, pagination);
  }

  getPage(sortingColumns, pagination) {
    const { onServerPageLogger } = this.props;

    // call our mock server with next sorting/paging arguments
    const getPageArgs = {
      sortingColumns,
      page: pagination.page,
      perPage: pagination.perPage
    };

    onServerPageLogger(getPageArgs);

    MockServerApi.getPage(getPageArgs).then(response => {
      this.setState({
        sortingColumns: sortingColumns,
        pagination: pagination,
        rows: response.rows,
        amountOfPages: response.amountOfPages,
        itemCount: response.itemCount,
        itemsStart: response.itemsStart,
        itemsEnd: response.itemsEnd
      });
    });
  }

  onSort(e, column, sortDirection) {
    // Clearing existing `sortingColumns` does simple single column sort. To do multisort,
    // set each column based on existing sorts specified and set sort position.
    const updatedSortingColumns = {
      [column.property]: {
        direction:
          sortDirection === TABLE_SORT_DIRECTION.ASC
            ? TABLE_SORT_DIRECTION.DESC
            : TABLE_SORT_DIRECTION.ASC,
        position: 0
      }
    };

    alert(
      'Server API called with: sort by ' +
        column.property +
        ' ' +
        updatedSortingColumns[column.property].direction
    );

    this.getPage(updatedSortingColumns, this.state.pagination);
  }

  onSelectRow(event, row) {
    const { sortingColumns, pagination } = this.state;
    MockServerApi.selectRow({ row }).then(response => {
      // refresh rows after row is selected
      this.getPage(sortingColumns, pagination);
    });
  }
  onSelectAllRows(event) {
    const { sortingColumns, pagination, rows } = this.state;
    const checked = event.target.checked;
    MockServerApi.selectAllRows({ rows, checked }).then(response => {
      // refresh rows after all rows selected
      this.getPage(sortingColumns, pagination);
    });
  }

  onPageInput(e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = e.target.value;
    this.getPage(this.state.sortingColumns, newPaginationState);
  }
  onPerPageSelect(eventKey, e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    newPaginationState.page = 1;
    this.getPage(this.state.sortingColumns, newPaginationState);
  }
  onFirstPage() {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = 1;
    this.getPage(this.state.sortingColumns, newPaginationState);
  }
  onPreviousPage() {
    if (this.state.pagination.page > 1) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page--;
      this.getPage(this.state.sortingColumns, newPaginationState);
    }
  }
  onNextPage() {
    const { pagination, amountOfPages } = this.state;
    if (pagination.page < amountOfPages) {
      let newPaginationState = Object.assign({}, pagination);
      newPaginationState.page++;
      this.getPage(this.state.sortingColumns, newPaginationState);
    }
  }
  onLastPage() {
    const { pagination, amountOfPages } = this.state;
    if (pagination.page < amountOfPages) {
      let newPaginationState = Object.assign({}, pagination);
      newPaginationState.page = amountOfPages;
      this.getPage(this.state.sortingColumns, newPaginationState);
    }
  }

  onRow(row, { rowIndex }) {
    return {
      className: cx({ selected: row.selected }),
      role: 'row'
    };
  }

  render() {
    const {
      columns,
      pagination,
      sortingColumns,
      rows,
      amountOfPages,
      itemCount,
      itemsStart,
      itemsEnd
    } = this.state;

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
                  rows: rows,
                  onSelectAllRows: this.onSelectAllRows,
                  onSort: this.onSort
                });
              }
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body rows={rows} rowKey="id" onRow={this.onRow} />
        </Table.PfProvider>
        <PaginationRow
          contentView
          viewType={PAGINATION_VIEW.TABLE}
          pagination={pagination}
          amountOfPages={amountOfPages}
          itemCount={itemCount}
          itemsStart={itemsStart}
          itemsEnd={itemsEnd}
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
MockServerPaginationTable.propTypes = {
  onServerPageLogger: PropTypes.func
};

export const mockServerPaginationTableSource = `
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as resolve from 'table-resolver';
import { bindMethods } from '../../../common/helpers';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter
} from '../index';
import { Table, TABLE_SORT_DIRECTION } from '../../Table';
import { DropdownKebab } from '../../DropdownKebab';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { PaginationRow, PAGINATION_VIEW } from '../../Pagination';
import MockServerApi from './mockServerApi';

export class MockServerPaginationTable extends React.Component {
  constructor(props) {
    super(props);

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
      'onSelectRow',
      'onSort'
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
      rows: [],
      selectedRows: [],

      // pagination default states
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      },

      // server side pagination values
      amountOfPages: 0,
      itemCount: 0,
      itemsStart: 0,
      itemsEnd: 0
    };
  }

  componentWillMount() {
    const { sortingColumns, pagination } = this.state;
    this.getPage(sortingColumns, pagination);
  }

  getPage(sortingColumns, pagination) {
    const { onServerPageLogger } = this.props;

    // call our mock server with next sorting/paging arguments
    const getPageArgs = {
      sortingColumns,
      page: pagination.page,
      perPage: pagination.perPage
    };

    onServerPageLogger(getPageArgs);

    MockServerApi.getPage(getPageArgs).then(response => {
      this.setState({
        sortingColumns: sortingColumns,
        pagination: pagination,
        rows: response.rows,
        amountOfPages: response.amountOfPages,
        itemCount: response.itemCount,
        itemsStart: response.itemsStart,
        itemsEnd: response.itemsEnd
      });
    });
  }

  onSort(e, column, sortDirection) {
    // Clearing existing sortingColumns does simple single column sort. To do multisort,
    // set each column based on existing sorts specified and set sort position.
    const updatedSortingColumns = {
      [column.property]: {
        direction:
          sortDirection === TABLE_SORT_DIRECTION.ASC
            ? TABLE_SORT_DIRECTION.DESC
            : TABLE_SORT_DIRECTION.ASC,
        position: 0
      }
    };

    alert(
      'Server API called with: sort by ' +
        column.property +
        ' ' +
        updatedSortingColumns[column.property].direction
    );

    this.getPage(updatedSortingColumns, this.state.pagination);
  }

  onSelectRow(event, row) {
    const { sortingColumns, pagination } = this.state;
    MockServerApi.selectRow({ row }).then(response => {
      // refresh rows after row is selected
      this.getPage(sortingColumns, pagination);
    });
  }
  onSelectAllRows(event) {
    const { sortingColumns, pagination, rows } = this.state;
    const checked = event.target.checked;
    MockServerApi.selectAllRows({ rows, checked }).then(response => {
      // refresh rows after all rows selected
      this.getPage(sortingColumns, pagination);
    });
  }

  onPageInput(e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = e.target.value;
    this.getPage(this.state.sortingColumns, newPaginationState);
  }
  onPerPageSelect(eventKey, e) {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    newPaginationState.page = 1;
    this.getPage(this.state.sortingColumns, newPaginationState);
  }
  onFirstPage() {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = 1;
    this.getPage(this.state.sortingColumns, newPaginationState);
  }
  onPreviousPage() {
    if (this.state.pagination.page > 1) {
      let newPaginationState = Object.assign({}, this.state.pagination);
      newPaginationState.page--;
      this.getPage(this.state.sortingColumns, newPaginationState);
    }
  }
  onNextPage() {
    const { pagination, amountOfPages } = this.state;
    if (pagination.page < amountOfPages) {
      let newPaginationState = Object.assign({}, pagination);
      newPaginationState.page++;
      this.getPage(this.state.sortingColumns, newPaginationState);
    }
  }
  onLastPage() {
    const { pagination, amountOfPages } = this.state;
    if (pagination.page < amountOfPages) {
      let newPaginationState = Object.assign({}, pagination);
      newPaginationState.page = amountOfPages;
      this.getPage(this.state.sortingColumns, newPaginationState);
    }
  }

  onRow(row, { rowIndex }) {
    return {
      className: cx({ selected: row.selected }),
      role: 'row'
    };
  }

  render() {
    const {
      columns,
      pagination,
      sortingColumns,
      rows,
      amountOfPages,
      itemCount,
      itemsStart,
      itemsEnd
    } = this.state;

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
                  rows: rows,
                  onSelectAllRows: this.onSelectAllRows,
                  onSort: this.onSort
                });
              }
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body rows={rows} rowKey="id" onRow={this.onRow} />
        </Table.PfProvider>
        <PaginationRow
          contentView
          viewType={PAGINATION_VIEW.TABLE}
          pagination={pagination}
          amountOfPages={amountOfPages}
          itemCount={itemCount}
          itemsStart={itemsStart}
          itemsEnd={itemsEnd}
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
MockServerPaginationTable.propTypes = {
  onServerPageLogger: PropTypes.func
};
`;
