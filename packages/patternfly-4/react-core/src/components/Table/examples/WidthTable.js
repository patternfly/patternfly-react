import React from 'react';
import { Table, TableHeader, TableBody, headerCol } from '@patternfly/react-core';

class WidthTable extends React.Component {
  static title = 'Table with Width Modifiers';
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        { title: 'Header cell', transforms: [cellWidth(10)] },
        'Branches',
        { title: 'Pull requests', transforms: [cellWidth(30)] },
        'Workspaces',
        {
          title: 'Last Commit', transforms: [cellWidth('max')]
        }],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Table with Width Modifiers">
        <TableHeader headerRows={columns} />
        <TableBody rows={rows} />
      </Table>
    );
  }
}

export default WidthTable;
