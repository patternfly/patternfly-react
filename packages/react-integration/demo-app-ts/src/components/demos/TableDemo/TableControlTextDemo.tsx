import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableProps,
  ICell,
  IRow,
  fitContent,
  wrappable,
  nowrap,
  truncate,
  breakWord
} from '@patternfly/react-table';

export class TableControlTextDemo extends React.Component<TableProps, { columns: (ICell | string)[]; rows: IRow[] }> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      columns: [
        { title: 'Header cell', transforms: [wrappable] },
        { title: 'Header cell 2', transforms: [nowrap], cellTransforms: [truncate] },
        { title: 'Pull requests', transforms: [truncate] },
        { title: 'Header cell 3', transforms: [breakWord] },
        { title: 'Last Commit', transforms: [fitContent] }
      ],
      rows: [['one', 'two', 'three', 'four', 'five']]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { columns, rows } = this.state;

    return (
      <Table caption="Table with wrap modifiers" cells={columns} rows={rows}>
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}
