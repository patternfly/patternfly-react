import * as React from 'react';
import { headerCol, ICell, IRow, IActions } from '@patternfly/react-table';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';

interface ITableState {
  columns: (ICell | string)[];
  rows: IRow[];
  actions: IActions;
}

export class TableSimpleActionsDemo extends React.Component<TableProps, ITableState> {
  static displayName = 'TableSimpleActionsDemo';
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
          cells: ['one', 'two', 'a', 'four', 'five']
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five']
        },
        {
          cells: ['p', 'two', 'b', 'four', 'five'],
          disableActions: true
        }
      ],
      actions: [
        /* eslint-disable no-console */
        {
          title: 'Some action',
          onClick: (_event, rowId) => console.log('clicked on Some action, on row: ', rowId)
        },
        {
          title: 'Another action',
          onClick: (_event, rowId) => console.log('clicked on Another action, on row: ', rowId)
        },
        {
          isSeparator: true,
          onClick: () => {}
        },
        {
          title: 'Third action',
          onClick: (_event, rowId) => console.log('clicked on Third action, on row: ', rowId)
        }
        /* eslint-enable no-console */
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows, actions } = this.state;
    return (
      <Table caption="Actions Table" actions={actions} cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
