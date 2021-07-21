import React from 'react';
import PropTypes from 'prop-types';
import { Table, TableHeader, TableBody, TableVariant, sortable, SortByDirection } from '@patternfly/react-table';

export default class DemoSortableTable extends React.Component {
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
    const { id } = this.props;
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
        id={id}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

DemoSortableTable.propTypes = {
  firstColumnRows: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
};
