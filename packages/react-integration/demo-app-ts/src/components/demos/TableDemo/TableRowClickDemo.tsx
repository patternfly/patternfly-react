import { ICell, IRow } from '@patternfly/react-table';
import { Table, TableBody, TableHeader, TableProps, type OnRowClick } from '@patternfly/react-table/deprecated';
import { Component } from 'react';

interface ITableRowClickDemoState {
  rows: IRow[];
  columns: (ICell | string)[];
}

export class TableRowClickDemo extends Component<TableProps, ITableRowClickDemoState> {
  static displayName = 'TableRowClickDemo';
  rowClickHandler: OnRowClick;
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [{ title: 'Repositories' }, 'Branches', { title: 'Pull requests' }, 'Workspaces'],
      rows: [
        {
          cells: ['Repositories one', 'Branches one', 'Pull requests one', 'Workspaces one'],
          isClickable: true,
          isRowSelected: true
        },
        {
          cells: ['Repositories two', 'Branches two', 'Pull requests two', 'Workspaces two'],
          isClickable: true,
          isRowSelected: false
        },
        {
          cells: ['Repositories three', 'Branches three', 'Pull requests three', 'Workspaces three'],
          isClickable: true,
          isRowSelected: false
        }
      ]
    };
    this.rowClickHandler = (_event, row) => {
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
