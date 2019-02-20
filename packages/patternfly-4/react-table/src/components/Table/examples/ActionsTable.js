import React from 'react';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class ActionsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [{ title: 'Repositories' }, 'Branches', { title: 'Pull requests' }, 'Workspaces', 'Last Commit'],
      rows: [
        {
          cells: ['one', 'two', 'a', 'four', 'five']
        },
        {
          cells: ['a', 'two', 'k', 'four', 'five']
        },
        {
          cells: ['p', 'two', 'b', 'four', 'five']
        }
      ],
      actions: [
        {
          title: 'Some action',
          onClick: (event, rowId) => console.log('clicked on Some action, on row: ', rowId)
        },
        {
          title: <div>Another action</div>,
          onClick: (event, rowId) => console.log('clicked on Another action, on row: ', rowId)
        },
        {
          isSeparator: true
        },
        {
          title: 'Third action',
          onClick: (event, rowId) => console.log('clicked on Third action, on row: ', rowId)
        }
      ]
    };
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

export default ActionsTable;
