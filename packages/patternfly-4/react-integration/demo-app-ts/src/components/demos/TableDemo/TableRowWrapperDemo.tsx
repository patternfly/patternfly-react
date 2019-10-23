import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody
} from '@patternfly/react-table';

import customRowWrapper from './RowWrapperForTableRowWrapperDemo';

interface ITableRowWrapperDemoState {
  rows: any;
  columns: any;
}

export class TableRowWrapperDemo extends React.Component<any, ITableRowWrapperDemoState> {
  constructor(props: any) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories' },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces'
      ],
      rows: [
        {
          cells: ['Repositories one', 'Branches one', 'Pull requests one', 'Workspaces one']
        },
        {
          cells: ['Repositories two', 'Branches two', 'Pull requests two', 'Workspaces two']
        },
        {
          cells: ['Repositories three', 'Branches three', 'Pull requests three', 'Workspaces three']
        }
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table
        caption="Table with custom row wrapper that styles odd rows"
        cells={columns}
        rows={rows}
        rowWrapper={customRowWrapper}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
