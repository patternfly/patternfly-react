import React from 'react';
import { Table, TableHeader, TableBody, headerCol } from '@patternfly/react-core';

class CellHeader extends React.Component {
  static title = 'First cell as Header';
  constructor(props) {
    super(props)
    this.state = {
      columns: [{ title: 'Header cell', cellTransforms: [headerCol] }, 'Branches', { title: 'Pull requests' }, 'Workspaces', 'Last Commit'],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="First cell as Header">
        <TableHeader headerRows={columns} />
        <TableBody rows={rows} />
      </Table>
    );
  }
}

export default CellHeader;
