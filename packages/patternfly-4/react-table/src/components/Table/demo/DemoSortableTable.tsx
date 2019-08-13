import * as React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Table, TableHeader, TableBody, TableVariant, sortable, SortByDirection, IRow, ISortBy } from '@patternfly/react-table';

export class DemoSortableTable extends React.Component<{}, { columns: any, rows: IRow[], sortBy: ISortBy }> {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable] },
        'Branches',
        { title: 'Pull requests', transforms: [sortable] },
        'Workspaces',
        'Last Commit'
      ],
      rows: [props.firstColumnRows, ['a', 'two', 'k', 'four', 'five'], ['p', 'two', 'b', 'four', 'five']],
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => {
      if (a[index] < b[index]) {
        return -1;
      }
      return a[index] > b[index] ? 1 : 0;
    });

    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table
        aria-label="Sortable Table"
        variant={TableVariant.compact}
        sortBy={sortBy}
        onSort={this.onSort}
        cells={columns}
        rows={rows}
        className="pf-m-no-border-rows"
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

