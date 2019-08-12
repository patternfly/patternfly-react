import React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  wrappable,
  IRow
} from '@patternfly/react-table';

export class TableHeadersWrappableDemo extends React.Component<{}, { columns: any, rows: IRow[] }> {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {title: 'This is a really long table header that goes on for a long time 1.', transforms: [wrappable]},
        {title: 'This is a really long table header that goes on for a long time 2.', transforms: [wrappable]},
        {title: 'This is a really long table header that goes on for a long time 3.', transforms: [wrappable]},
        {title: 'This is a really long table header that goes on for a long time 4.', transforms: [wrappable]},
        {title: 'This is a really long table header that goes on for a long time 5.', transforms: [wrappable]},
      ],
      rows: [
        ['Repository 1', '10', '25', '5', '2 days ago'],
        ['Repository 2', '10', '25', '5', '2 days ago'],
        ['Repository 3', '10', '25', '5', '2 days ago'],
        ['Repository 4', '10', '25', '5', '2 days ago'],
      ]
    };
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Wrappable headers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}