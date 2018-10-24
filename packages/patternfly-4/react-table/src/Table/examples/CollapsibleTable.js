import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-core';

class CollapsibleTable extends React.Component {
  static title = 'Collapsible table';
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
      rows: [{
        cells: ['one', 'two', 'three', 'four', 'five'],
      }, {
        isOpen: true,
        cells: ['one', 'two', 'three', 'four', 'five'],
      }, {
        parent: 1,
        cells: ['one', 'two', 'three', 'four', 'five'],
      }, {
        isOpen: false,
        cells: ['one', 'two', 'three', 'four', 'five'],
      }, {
        isOpen: false,
        parent: 3,
        cells: ['one', 'two', 'three', 'four', 'five'],
      }, {
        parent: 4,
        cells: ['one', 'two', 'three', 'four', 'five'],
      }, {
        isOpen: false,
        cells: ['one', 'two', 'three', 'four', 'five'],
      }, {
        parent: 6,
        cells: ['one', 'two', 'three', 'four', 'five'],
      }, {
        parent: 6,
        cells: ['one', 'two', 'three', 'four', 'five'],
      }]
    };
    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(event, rowKey, isOpen) {
    const { rows } = this.state;
    rows[rowKey].isOpen = isOpen;
    this.setState({
      rows
    });
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Collapsible table" onCollapse={this.onCollapse}>
        <TableHeader headerRows={columns} />
        <TableBody rows={rows} />
      </Table>
    );
  }
}

export default CollapsibleTable;
