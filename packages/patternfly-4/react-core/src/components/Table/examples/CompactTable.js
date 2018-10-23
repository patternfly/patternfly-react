import React from 'react';
import { Table, TableHeader, TableBody, TableVariant } from '@patternfly/react-core';

class CompactTable extends React.Component {
  static title = 'Compact Table';
  constructor(props) {
    super(props)
    this.state = {
      columns: [{ title: 'Header cell' }, 'Branches', { title: 'Pull requests', props: { className: 'pf-u-text-align-center' } }, '', ''],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Compact Table" variant={TableVariant.compact}>
        <TableHeader headerRows={columns} />
        <TableBody rows={rows} />
      </Table>
    );
  }
}

export default CompactTable;
