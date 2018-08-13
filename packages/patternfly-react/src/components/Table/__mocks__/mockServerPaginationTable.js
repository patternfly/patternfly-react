import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as resolve from 'table-resolver';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { Paginator, PAGINATION_VIEW } from '../../Pagination';
import MockServerApi from './mockServerApi';

export class MockServerPaginationTable extends React.Component {
  static onRow(row, { rowIndex }) {
    return {
      className: classNames({ selected: row.selected }),
      role: 'row'
    };
  }

  constructor(props) {
    super(props);

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
              (value, { rowData, rowIndex }) => selectionCellFormatter({ rowData, rowIndex }, this.onSelectRow)
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
      rows: [],

      // pagination default states
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      },

      // server side pagination values
      itemCount: 0
    };
  }

  componentWillMount() {
    const { sortingColumns, pagination } = this.state;
    this.getPage(sortingColumns, pagination);
  }

  onPageSet = page => {
    const newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = page;
    this.getPage(this.state.sortingColumns, newPaginationState);
  };

  onPerPageSelect = (eventKey, e) => {
    const newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    newPaginationState.page = 1;
    this.getPage(this.state.sortingColumns, newPaginationState);
  };

  onSelectAllRows = event => {
    const { sortingColumns, pagination, rows } = this.state;
    const { checked } = event.target;
    MockServerApi.selectAllRows({ rows, checked }).then(response => {
      // refresh rows after all rows selected
      this.getPage(sortingColumns, pagination);
    });
  };

  onSelectRow = (event, row) => {
    const { sortingColumns, pagination } = this.state;
    MockServerApi.selectRow({ row }).then(response => {
      // refresh rows after row is selected
      this.getPage(sortingColumns, pagination);
    });
  };
  onSort = (e, column, sortDirection) => {
    // Clearing existing sortingColumns does simple single column sort. To do multisort,
    // set each column based on existing sorts specified and set sort position.
    const updatedSortingColumns = {
      [column.property]: {
        direction: sortDirection === TABLE_SORT_DIRECTION.ASC ? TABLE_SORT_DIRECTION.DESC : TABLE_SORT_DIRECTION.ASC,
        position: 0
      }
    };

    alert(`Server API called with: sort by ${column.property} ${updatedSortingColumns[column.property].direction}`);

    this.getPage(updatedSortingColumns, this.state.pagination);
  };

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
        sortingColumns,
        pagination,
        rows: response.rows,
        itemCount: response.itemCount
      });
    });
  }

  render() {
    const { columns, pagination, sortingColumns, rows, itemCount } = this.state;

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
                  rows,
                  onSelectAllRows: this.onSelectAllRows,
                  onSort: this.onSort
                })
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body rows={rows} rowKey="id" onRow={MockServerPaginationTable.onRow} />
        </Table.PfProvider>
        <Paginator
          viewType={PAGINATION_VIEW.TABLE}
          pagination={pagination}
          itemCount={itemCount}
          onPageSet={this.onPageSet}
          onPerPageSelect={this.onPerPageSelect}
        />
      </Grid>
    );
  }
}
MockServerPaginationTable.propTypes = {
  onServerPageLogger: PropTypes.func.isRequired
};

export const mockServerPaginationTableSource = `
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as resolve from 'table-resolver';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  selectionCellFormatter,
  selectionHeaderCellFormatter,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { Paginator, PAGINATION_VIEW } from '../../Pagination';
import MockServerApi from './mockServerApi';

export class MockServerPaginationTable extends React.Component {
  static onRow(row, { rowIndex }) {
    return {
      className: classNames({ selected: row.selected }),
      role: 'row'
    };
  }
  
  constructor(props) {
    super(props);

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
      rows: [],

      // pagination default states
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      },

      // server side pagination values
      itemCount: 0
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
        itemCount: response.itemCount
      });
    });
  }

  onSort = (e, column, sortDirection) => {
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
  };

  onSelectRow = (event, row) => {
    const { sortingColumns, pagination } = this.state;
    MockServerApi.selectRow({ row }).then(response => {
      // refresh rows after row is selected
      this.getPage(sortingColumns, pagination);
    });
  };
  onSelectAllRows = event => {
    const { sortingColumns, pagination, rows } = this.state;
    const checked = event.target.checked;
    MockServerApi.selectAllRows({ rows, checked }).then(response => {
      // refresh rows after all rows selected
      this.getPage(sortingColumns, pagination);
    });
  };

  onPerPageSelect = (eventKey, e) => {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.perPage = eventKey;
    newPaginationState.page = 1;
    this.getPage(this.state.sortingColumns, newPaginationState);
  };
  onPageSet = page => {
    let newPaginationState = Object.assign({}, this.state.pagination);
    newPaginationState.page = page;
    this.getPage(this.state.sortingColumns, newPaginationState);
  };

  render() {
    const { columns, pagination, sortingColumns, rows, itemCount } = this.state;

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
          <Table.Body rows={rows} rowKey="id" onRow={MockServerPaginationTable.onRow} />
        </Table.PfProvider>
        <Paginator
          viewType={PAGINATION_VIEW.TABLE}
          pagination={pagination}
          itemCount={itemCount}
          onPageSet={this.onPageSet}
          onPerPageSelect={this.onPerPageSelect}
        />
      </Grid>
    );
  }
}
MockServerPaginationTable.propTypes = {
  onServerPageLogger: PropTypes.func.isRequired
};
`;
