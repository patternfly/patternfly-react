import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class SimpleTable extends React.Component {
  static title = 'Simple Table';
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { title: 'Repositories' },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last Commit'
      ],
      rows: [
        ['one', 'two', 'three', 'four', 'five'],
        [
          {
            title: <div>Col span</div>,
            props: { colSpan: 3 }
          },
          'ff',
          'dw'
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
