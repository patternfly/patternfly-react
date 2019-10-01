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
  classNames,
  Visibility,
  IRow
} from '@patternfly/react-table';

export class TableBreakpointModifersDemo extends React.Component<TableProps, { columns: any; rows: IRow[] }> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        {
          title: 'Repositories',
          columnTransforms: [classNames(Visibility.hidden, Visibility.visibleOnMd, Visibility.hiddenOnLg)]
        },
        'Branches',
        {
          title: 'Pull requests',
          columnTransforms: [classNames(Visibility.hiddenOnMd, Visibility.visibleOnLg)]
        },
        'Workspaces',
        {
          title: 'Last Commit',
          columnTransforms: [classNames(Visibility.hidden, Visibility.visibleOnSm)]
        }
      ],
      rows: [
        ['Visible only on md breakpoint', '10', 'Hidden only on md breakpoint', '5', 'Hidden on xs breakpoint'],
        ['Repository 2', '10', '25', '5', '2 days ago'],
        ['Repository 3', '10', '25', '5', '2 days ago'],
        ['Repository 4', '10', '25', '5', '2 days ago']
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Table with hidden/visible breakpoint modifiers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
