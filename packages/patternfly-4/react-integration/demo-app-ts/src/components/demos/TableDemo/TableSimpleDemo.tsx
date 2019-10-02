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
  textCenter,
  IRow
} from '@patternfly/react-table';

export class TableSimpleDemo extends React.Component<TableProps, { columns: any; rows: IRow[] }> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Repositories' },
        'Branches',
        { title: 'Pull requests' },
        'Workspaces',
        {
          title: 'Last Commit',
          transforms: [textCenter],
          cellTransforms: [textCenter]
        }
      ],
      rows: [
        ['one', 'two', 'three', 'four', 'five'],
        [
          {
            title: <div>one - 2</div>,
            props: { title: 'hover title', colSpan: 3 }
          },
          'four - 2',
          'five - 2'
        ],
        [
          'one - 3',
          'two - 3',
          'three - 3',
          'four - 3',
          {
            title: 'five - 3 (not centered)',
            props: { textCenter: false }
          }
        ]
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Simple Table" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
