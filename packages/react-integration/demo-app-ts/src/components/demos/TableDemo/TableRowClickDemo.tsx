import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  IRow,
  IExtraRowData,
  IComputedData,
  TableProps,
  ICell,
  OnRowClick
} from '@patternfly/react-table';

interface ITableRowClickDemoState {
  rows: IRow[];
  columns: (ICell | string)[];
}

export class TableRowClickDemo extends React.Component<TableProps, ITableRowClickDemoState> {
  static displayName = 'TableRowClickDemo';
  rowClickHandler: OnRowClick;
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

    this.rowClickHandler = (
      _event: React.KeyboardEvent | React.MouseEvent,
      row: IRow,
      _rowProps: IExtraRowData,
      _computedData: IComputedData
    ) => {
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
