import * as React from 'react';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table/deprecated';
import { expandable, ICell, IRow } from '@patternfly/react-table';

interface TableState {
  columns: (ICell | string)[];
  rows: IRow[];
}

export class TableCollapsibleDemo extends React.Component<TableProps, TableState> {
  static displayName = 'TableCollapsibleDemo';
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Header cell',
          cellFormatters: [expandable]
        },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        {
          title: 'Last Commit'
        }
      ],
      rows: [
        {
          cells: ['one', 'two', 'three', 'four', 'five']
        },
        {
          isOpen: true,
          cells: ['parent - 1', 'two', 'three', 'four', 'five']
        },
        {
          parent: 1,
          fullWidth: true,
          cells: ['child - 1']
        },
        {
          isOpen: false,
          cells: ['parent - 2', 'two', 'three', 'four', 'five']
        },
        {
          parent: 3,
          cells: ['child - 2']
        },
        {
          isOpen: false,
          cells: ['parent - 3', 'two', 'three', 'four', 'five']
        },
        {
          parent: 5,
          fullWidth: true,
          noPadding: true,
          cells: ['child - 3']
        }
      ]
    };
    this.onCollapse = this.onCollapse.bind(this);
  }

  onCollapse(event: React.MouseEvent, rowIndex: number, isOpen: boolean) {
    /**
     * Please do not use a row index for more complex tables.
     * Rather use some kind of identifier like ID passed with each row.
     */
    const newRows = Array.from(this.state.rows);
    newRows[rowIndex] = { ...newRows[rowIndex], isOpen };
    this.setState({
      rows: newRows
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Collapsible table" onCollapse={this.onCollapse} rows={rows} cells={columns}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
