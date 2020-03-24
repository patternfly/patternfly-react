import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableProps,
  headerCol,
  ICell,
  IRow,
  IRowData,
  IExtra,
  IActions,
  ISeparator
} from '@patternfly/react-table';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
}

export class TableActionsDemo extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories', cellTransforms: [headerCol()] },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        'Last Commit'
      ],
      rows: [
        {
          cells: ['one', 'two', 'a', 'four', 'five'],
          type: 'green'
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five']
        },
        {
          cells: ['p', 'two', 'b', 'four', 'five'],
          type: 'blue'
        },
        {
          cells: ['5', '2', 'b', 'four', 'five']
        }
      ]
    };
  }

  actionResolver(rowData: IRowData, { rowIndex }: IExtra) {
    if (rowIndex === 1) {
      return [];
    }

    const thirdAction: IActions =
      rowData.type === 'blue'
        ? [
            {
              isSeparator: true
            } as ISeparator,
            {
              title: 'Third action',
              // eslint-disable-next-line no-shadow
              onClick: (event, rowId, rowData) =>
                // eslint-disable-next-line no-console
                console.log(`clicked on Third action, on row ${rowId} of type ${rowData.type}`)
            }
          ]
        : [];

    return [
      {
        title: 'Some action',
        // eslint-disable-next-line no-shadow
        onClick: (event, rowId, rowData) =>
          // eslint-disable-next-line no-console
          console.log(`clicked on Some action, on row ${rowId} of type ${rowData.type}`)
      },
      {
        title: 'Another action',
        // eslint-disable-next-line no-shadow, @typescript-eslint/no-unused-vars
        onClick: (event, rowId, rowData, _extra) =>
          // eslint-disable-next-line no-console
          console.log(`clicked on Another action, on row ${rowId} of type ${rowData.type}`)
      },
      ...thirdAction
    ] as IActions;
  }

  areActionsDisabled(rowData: IRowData, { rowIndex }: IExtra) {
    return rowIndex === 3;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;
    return (
      <Table
        caption="Actions Table"
        cells={columns}
        rows={rows}
        actionResolver={this.actionResolver}
        areActionsDisabled={this.areActionsDisabled}
      >
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
