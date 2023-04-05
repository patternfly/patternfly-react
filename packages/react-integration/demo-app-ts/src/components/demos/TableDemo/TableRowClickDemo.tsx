import * as React from 'react';
import {
  IRow,
  IExtraRowData,
  IComputedData,
  ICell
} from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

interface ITableRowClickDemoState {
  rows: IRow[];
  columns: (ICell | string)[];
}

export class TableRowClickDemo extends React.Component<TableProps, ITableRowClickDemoState> {
  static displayName = 'TableRowClickDemo';
  rowClickHandler: (event: React.MouseEvent, row: IRow, rowProps: IExtraRowData, computedData: IComputedData) => void;
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [{ title: 'Repositories' }, 'Branches', { title: 'Pull requests' }, 'Workspaces'],
      rows: [
        {
          cells: ['Repositories one', 'Branches one', 'Pull requests one', 'Workspaces one'],
          isHoverable: true,
          isRowSelected: true
        },
        {
          cells: ['Repositories two', 'Branches two', 'Pull requests two', 'Workspaces two'],
          isHoverable: true,
          isRowSelected: false
        },
        {
          cells: ['Repositories three', 'Branches three', 'Pull requests three', 'Workspaces three'],
          isHoverable: true,
          isRowSelected: false
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
