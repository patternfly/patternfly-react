import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  IRow,
  IExtraRowData,
  IComputedData,
  TableProps,
  ICell
} from '@patternfly/react-table';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface ITableRowClickDemoState {
  rows: IRow[];
  columns: (ICell | string)[];
}

export class TableRowClickDemo extends React.Component<TableProps, ITableRowClickDemoState> {
  rowClickHandler: (event: React.MouseEvent, row: IRow, rowProps: IExtraRowData, computedData: IComputedData) => void;
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [{ title: 'Repositories' }, 'Branches', { title: 'Pull requests' }, 'Workspaces'],
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
    this.rowClickHandler = (event: React.MouseEvent, row: IRow) => {
      // eslint-disable-next-line no-console
      console.log('handle row click', row);
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Row Click Handler Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody onRowClick={this.rowClickHandler} />
      </Table>
    );
  }
}
