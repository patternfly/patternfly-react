import React from 'react';
import orderBy from 'lodash.orderby';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { defaultSortingOrder } from '../index';
import { Table } from '../../Table';
import { DropdownKebab } from '../../DropdownKebab';
import { MenuItem } from '../../MenuItem';
import { compose } from 'recompose';
import { mockRows } from './mockDataTableRows';

/**
 * Reactabular client side data sorting based on the following api docs:
 * https://reactabular.js.org/#/data/sorting
 */

export class MockSortableTable extends React.Component {
  constructor(props) {
    super(props);

    // Point the transform to your rows. React state can work for this purpose
    // but you can use a state manager as well.
    const getSortingColumns = () => this.state.sortingColumns || {};

    // sortable transform
    const sortable = sort.sort({
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

    // sorting fortmatter
    const sortingFormat = sort.header({
      sortable,
      getSortingColumns,
      strategy: sort.strategies.byProperty
    });

    // cell formatter
    const cellFormat = value => {
      return <Table.Cell>{value}</Table.Cell>;
    };

    this.state = {
      // Sort the first column in an ascending way by default.
      sortingColumns: {
        name: {
          direction: 'asc',
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
              colSpan: 1
            },
            transforms: [sortable],
            formatters: [sortingFormat]
          },
          cell: {
            props: {
              index: 0
            },
            formatters: [cellFormat]
          }
        },
        {
          property: 'height',
          header: {
            label: 'Height',
            props: {
              index: 1,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortable],
            formatters: [sortingFormat]
          },
          cell: {
            props: {
              index: 1
            },
            formatters: [cellFormat]
          }
        },
        {
          property: 'eye_color',
          header: {
            label: 'Eye Color',
            props: {
              index: 2,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortable],
            formatters: [sortingFormat]
          },
          cell: {
            props: {
              index: 2
            },
            formatters: [cellFormat]
          }
        },
        {
          property: 'gender',
          header: {
            label: 'Gender',
            props: {
              index: 3,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortable],
            formatters: [sortingFormat]
          },
          cell: {
            props: {
              index: 3
            },
            formatters: [cellFormat]
          }
        },
        {
          property: 'birth_year',
          header: {
            label: 'Birth Year',
            props: {
              index: 4,
              rowSpan: 1,
              colSpan: 1
            },
            transforms: [sortable],
            formatters: [sortingFormat]
          },
          cell: {
            props: {
              index: 4
            },
            formatters: [cellFormat]
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
            }
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

    const customHeaderCell = cellProps => {
      const { index } = cellProps;
      const column = columns[index];
      const sortDirection =
        sortingColumns[column.property] &&
        sortingColumns[column.property].direction;
      return (
        <Table.Heading
          sort
          sortDirection={sortDirection}
          aria-label={column.header.label}
          {...cellProps}
        >
          {column.header.label}
        </Table.Heading>
      );
    };

    return (
      <div>
        <Table.PfProvider
          striped
          bordered
          hover
          dataTable
          columns={columns}
          components={{
            header: { cell: customHeaderCell }
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
}
