import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class SimpleTable extends React.Component {
  static title = 'Simple Table';
  constructor(props) {
    super(props)
    this.state = {
      columns: [{ title: 'Repositories' }, 'Branches', { title: 'Pull requests' }, 'Workspaces', 'Last Commit'],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Simple Table">
        <TableHeader headerRows={columns} />
        <TableBody rows={rows} />
      </Table>
    );
  }
}

export default SimpleTable;
