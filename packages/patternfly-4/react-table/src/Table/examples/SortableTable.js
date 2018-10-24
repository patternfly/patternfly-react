import React from 'react';
import { Table, TableHeader, TableBody, sortable, SortByDirection } from '@patternfly/react-core';

class SortableTable extends React.Component {
  static title = 'Sortable Table';
  constructor(props) {
    super(props)
    this.state = {
      columns: [{ title: 'Repositories', transforms: [sortable] }, 'Branches', { title: 'Pull requests', transforms: [sortable] }, 'Workspaces', 'Last Commit'],
      rows: [
        ['one', 'two', 'a', 'four', 'five'],
        ['a', 'two', 'k', 'four', 'five'],
        ['p', 'two', 'b', 'four', 'five']
      ],
      sortBy: {}
    };
    this.onSort = this.onSort.bind(this);
  }

  onSort(_event, index, direction) {
    const sortedRows = this.state.rows.sort((a, b) => a[index] < b[index] ? -1 : a[index] > b[index] ? 1 : 0);
    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    })
  }

  render() {
    const { columns, rows, sortBy } = this.state;

    return (
      <Table caption="Sortable Table" sortBy={sortBy} onSort={this.onSort}>
        <TableHeader headerRows={columns} />
        <TableBody rows={rows} />
      </Table>
    );
  }
}

export default SortableTable;
