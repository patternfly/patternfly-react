import * as React from 'react';
import { Table, TableHeader, TableBody, TableProps } from '@patternfly/react-table';

interface TableState {
  page: number;
  perPage: number;
  res: any;
}

export class TableStickyHeaderDemo extends React.Component<TableProps, TableState> {
  constructor(props: TableProps) {
    super(props);
    this.state = {
      res: [],
      perPage: 0,
      page: 0
    };
  }

  fetch(page: number, perPage: number) {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ res: resp, perPage, page }))
      .catch(err => this.setState({ perPage: 0, page: 0 }));
  }

  componentDidMount() {
    this.fetch(this.state.page || 1, this.state.perPage || 20);
  }

  render() {
    const { res } = this.state;

    return (
      <React.Fragment>
        {
          <Table
            caption="Sticky Header Table"
            isStickyHeader
            cells={['Title', 'Body']}
            rows={res.map((post: { title: any; body: any }) => [post.title, post.body])}
            aria-label="Sticky Header Table Demo"
          >
            <TableHeader />
            <TableBody />
          </Table>
        }
      </React.Fragment>
    );
  }
}
