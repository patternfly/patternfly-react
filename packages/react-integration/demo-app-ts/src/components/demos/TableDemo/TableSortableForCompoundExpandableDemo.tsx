import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableVariant,
  sortable,
  SortByDirection,
  ICell,
  IRow,
  ISortBy,
  TableProps
} from '@patternfly/react-table';

export interface DemoSortableTableProps {
  firstColumnRows?: string[];
  columns?: (ICell | string)[];
  rows?: (IRow | string[])[];
  sortBy?: ISortBy;
  id?: string;
}

interface DemoSortableTableState {
  rows: (IRow | string[])[];
  columns: (ICell | string)[];
  sortBy: ISortBy;
}

export class DemoSortableTable extends React.Component<DemoSortableTableProps, DemoSortableTableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', transforms: [sortable] },
        'Branches',
        { title: 'Pull requests', transforms: [sortable] },
        'Workspaces',
        'Last Commit'
      ],
      rows: [
        this.props.firstColumnRows ? this.props.firstColumnRows : [''],
        ['a', 'two', 'k', 'four', 'five'],
        ['p', 'two', 'b', 'four', 'five']
      ],
      sortBy: {}
    };
  }

  onSort = (_event: React.MouseEvent, index: number, direction: SortByDirection) => {
    const sortedRows = this.state.rows.sort(
      (a: { [index: number]: IRow | string }, b: { [index: number]: IRow | string }) => {
        if (a && b) {
          if (a[index] < b[index]) {
            return -1;
          }
          return a[index] > b[index] ? 1 : 0;
        } else {
          return 0;
        }
      }
    );

    this.setState({
      sortBy: {
        index,
        direction
      },
      rows: direction === SortByDirection.asc ? sortedRows : sortedRows.reverse()
    });
  };

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
