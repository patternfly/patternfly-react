import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class SimpleTable extends React.Component {
  static title = 'Simple Table';
  constructor(props) {
    super(props);
    this.state = {
      columns: [{ title: 'Repositories' }, 'Branches', { title: 'Pull requests' }, 'Workspaces', 'Last Commit'],
      rows: [
        ['one', 'two', 'three', 'four', 'five'],
        [
          {
            title: <div>one - 2</div>,
            props: { title: 'hover title', colSpan: 3 }
          },
          'four - 2',
          'five - 2'
        ]
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Simple Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

export default SimpleTable;
