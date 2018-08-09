import React from 'react';
import { orderBy } from 'lodash';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { compose } from 'recompose';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';
import { MenuItem } from '../../MenuItem';
import { mockRows } from './mockRows';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */

export class MockClientSortableTable extends React.Component {
  constructor(props) {
    super(props);

    // Point the transform to your sortingColumns. React state can work for this purpose
    // but you can use a state manager as well.
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
      columns: [
        {
          property: 'name',
          header: {
            label: 'Name',
            props: {
              index: 0,
              rowSpan: 1,
              colSpan: 1,
              sort: true
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 0
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'height',
          header: {
            label: 'Height',
            props: {
              index: 1,
              rowSpan: 1,
              colSpan: 1,
              sort: true
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
          property: 'eye_color',
          header: {
            label: 'Eye Color',
            props: {
              index: 2,
              rowSpan: 1,
              colSpan: 1,
              sort: true
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
          property: 'gender',
          header: {
            label: 'Gender',
            props: {
              index: 3,
              rowSpan: 1,
              colSpan: 1,
              sort: true
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
          property: 'birth_year',
          header: {
            label: 'Birth Year',
            props: {
              index: 4,
              rowSpan: 1,
              colSpan: 1,
              sort: true
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
          property: 'actions',
          header: {
            label: 'Actions',
            props: {
              index: 5,
              rowSpan: 1,
              colSpan: 2
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 5
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
      rows: mockRows.slice(0, 6)
    };
  }
  render() {
    const { rows, sortingColumns, columns } = this.state;

    const sortedRows = compose(
      sort.sorter({
        columns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty
      })
    )(rows);

    return (
      <div>
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
                  sortingColumns
                })
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body
            rows={sortedRows}
            rowKey="id"
            onRow={() => ({
              role: 'row'
            })}
          />
        </Table.PfProvider>
      </div>
    );
  }
}

export const mockClientSortableTableSource = `
import React from 'react';
import { orderBy } from 'lodash';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import {
  actionHeaderCellFormatter,
  customHeaderFormattersDefinition,
  defaultSortingOrder,
  sortableHeaderCellFormatter,
  tableCellFormatter,
  Table,
  TABLE_SORT_DIRECTION
} from '../index';
import { MenuItem } from '../../MenuItem';
import { compose } from 'recompose';
import { mockRows } from './mockRows';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */

export class MockClientSortableTable extends React.Component {
  constructor(props) {
    super(props);

    // Point the transform to your sortingColumns. React state can work for this purpose
    // but you can use a state manager as well.
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
      columns: [
        {
          property: 'name',
          header: {
            label: 'Name',
            props: {
              index: 0,
              rowSpan: 1,
              colSpan: 1,
              sort: true
            },
            transforms: [sortableTransform],
            formatters: [sortingFormatter],
            customFormatters: [sortableHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 0
            },
            formatters: [tableCellFormatter]
          }
        },
        {
          property: 'height',
          header: {
            label: 'Height',
            props: {
              index: 1,
              rowSpan: 1,
              colSpan: 1,
              sort: true
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
          property: 'eye_color',
          header: {
            label: 'Eye Color',
            props: {
              index: 2,
              rowSpan: 1,
              colSpan: 1,
              sort: true
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
          property: 'gender',
          header: {
            label: 'Gender',
            props: {
              index: 3,
              rowSpan: 1,
              colSpan: 1,
              sort: true
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
          property: 'birth_year',
          header: {
            label: 'Birth Year',
            props: {
              index: 4,
              rowSpan: 1,
              colSpan: 1,
              sort: true
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
          property: 'actions',
          header: {
            label: 'Actions',
            props: {
              index: 5,
              rowSpan: 1,
              colSpan: 2
            },
            formatters: [actionHeaderCellFormatter]
          },
          cell: {
            props: {
              index: 5
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
      rows: mockRows.slice(0, 6)
    };
  }
  render() {
    const { rows, sortingColumns, columns } = this.state;

    const sortedRows = compose(
      sort.sorter({
        columns: columns,
        sortingColumns,
        sort: orderBy,
        strategy: sort.strategies.byProperty
      })
    )(rows);

    return (
      <div>
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
                  sortingColumns
                });
              }
            }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body
            rows={sortedRows}
            rowKey="id"
            onRow={() => {
              return {
                role: 'row'
              };
            }}
          />
        </Table.PfProvider>
      </div>
    );
  }
}`;
