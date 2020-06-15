import * as React from 'react';
import { Table, TableHeader, TableBody, TableProps, headerCol, ICell, IRow } from '@patternfly/react-table';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
}

export class TableFirstCellAsHeaderDemo extends React.Component<TableProps, TableState> {
  static displayName = 'TableFirstCellAsHeaderDemo';
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell', cellTransforms: [headerCol('selectable')] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last Commit'
      ],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Table with First cell as Header" rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
