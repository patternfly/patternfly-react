import React from 'react';
import orderBy from 'lodash.orderby';
import * as sort from 'sortabular';
import * as resolve from 'table-resolver';
import { bindMethods } from '../../../common/helpers';
import { defaultSortingOrder } from '../index';
import { Table } from '../../Table';
import { DropdownKebab } from '../../DropdownKebab';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';
import { Paginator, paginate } from '../../Pagination';
import { compose } from 'recompose';
import { mockRows } from './mockDataTableRows';

/**
 * Reactabular client side paging based on the following api docs:
 * https://reactabular.js.org/#/data/pagination
 */

export class MockPaginationTable extends React.Component {
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
      rows: mockRows,
      pagination: {
        page: 1,
        perPage: 6,
        perPageOptions: [6, 10, 15]
      }
    };

    bindMethods(this, [
      'onPageInput',
      'onPerPageSelect',
      'onFirstPage',
      'onPreviousPage',
      'onNextPage',
      'onLastPage'
    ]);
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
    const { page } = this.state.pagination;
    if (page > 1) {
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
  render() {
    const { rows, sortingColumns, columns, pagination } = this.state;

    const sortedPaginatedRows = compose(
      paginate(pagination),
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
        <Table.Heading sort sortDirection={sortDirection} {...cellProps}>
          {column.header.label}
        </Table.Heading>
      );
    };

    const customTableCell = cellProps => {
      return cellProps.children;
    };

    return (
      <Grid fluid>
        <Table.PfProvider
          striped
          bordered
          hover
          dataTable
          columns={columns}
          components={{
            header: { cell: customHeaderCell },
            body: { cell: customTableCell }
          }}
        >
          <Table.Header headerRows={resolve.headerRows({ columns })} />
          <Table.Body rows={sortedPaginatedRows.rows} rowKey="id" />
        </Table.PfProvider>
        <Paginator
          className="content-view-pf-pagination table-view-pf-pagination clearfix"
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
