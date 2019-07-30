---
title: 'Pagination table'
section: 'demos'
---

## Pagination table demo

import { Pagination, PaginationVariant, Title } from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

```js
import React from 'react';
import { Pagination, PaginationVariant, Title } from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

class ComplexPaginationTableDemo extends React.Component {
  constructor(props) {
    this.state = {
      res: [],
      perPage: 20,
      total: 100,
      page: 1,
      error: null,
      loading: true
    };
  }

  fetch(page, perPage) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ res: resp, perPage, page, loading: false }))
      .catch(err => this.setState({ error: err, loading: false }));
  }

  componentDidMount() {
    this.fetch(this.state.page, this.state.perPage);
  }

  renderPagination(variant = 'top') {
    const { page, perPage, total } = this.state;
    return (
      <Pagination
        itemCount={total}
        page={page}
        perPage={perPage}
        onSetPage={(_evt, value) => this.fetch(value, perPage)}
        onPerPageSelect={(_evt, value) => this.fetch(1, value)}
        variant={variant}
      />
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        {this.renderPagination()}
        {!loading && (
          <Table cells={['Title', 'Body']} rows={this.state.res.map(post => [post.title, post.body])}>
            <TableHeader />
            <TableBody />
          </Table>
        )}
        {loading && <center><Title size="3xl">Please wait while loading data</Title></center>}
      </React.Fragment>
    );
  }
}
```
