import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableProps,
  sortable,
  SortByDirection,
  headerCol,
  TableVariant,
  expandable,
  cellWidth,
  IRow,
  IRowData,
  IExtra,
  IActionsResolver,
  IAction,
  ISeparator
} from '@patternfly/react-table';

export class TableActionsDemo extends React.Component<TableProps, { columns: any; rows: IRow[] }> {
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
      return null;
    }

    const thirdAction =
      rowData.type === 'blue'
        ? [
            {
              isSeparator: true
            } as ISeparator,
            {
              title: 'Third action',
              // tslint:disable-next-line:no-shadowed-variable
              onClick: (event, rowId, rowData, extra) =>
                // tslint:disable-next-line:no-console
                console.log(`clicked on Third action, on row ${rowId} of type ${rowData.type}`)
            } as IAction
          ]
        : [];

    return [
      {
        title: 'Some action',
        // tslint:disable-next-line:no-shadowed-variable
        onClick: (event, rowId, rowData, extra) =>
          // tslint:disable-next-line:no-console
          console.log(`clicked on Some action, on row ${rowId} of type ${rowData.type}`)
      } as IAction,
      {
        title: 'Another action',
        // tslint:disable-next-line:no-shadowed-variable
        onClick: (event, rowId, rowData, extra) =>
          // tslint:disable-next-line:no-console
          console.log(`clicked on Another action, on row ${rowId} of type ${rowData.type}`)
      } as IAction,
      ...thirdAction
    ];
  }

  areActionsDisabled(rowData, { rowIndex }) {
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
