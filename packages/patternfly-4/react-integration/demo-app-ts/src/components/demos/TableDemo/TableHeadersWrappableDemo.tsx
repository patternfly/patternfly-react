import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableProps,
  wrappable,
  ICell,
  IRow
} from '@patternfly/react-table';

interface TableState {
  rows: IRow[];
  columns: (ICell | string)[];
}

export class TableHeadersWrappableDemo extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'This is a really long table header that goes on for a long time 1.', transforms: [wrappable] },
        { title: 'This is a really long table header that goes on for a long time 2.', transforms: [wrappable] },
        { title: 'This is a really long table header that goes on for a long time 3.', transforms: [wrappable] },
        { title: 'This is a really long table header that goes on for a long time 4.', transforms: [wrappable] },
        { title: 'This is a really long table header that goes on for a long time 5.', transforms: [wrappable] }
      ],
      rows: [
        ['Repository 1', '10', '25', '5', '2 days ago'],
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
      <Table caption="Table with Wrappable Headers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
