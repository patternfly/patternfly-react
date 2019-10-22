---
title: 'Pagination table'
section: 'demos'
---

import {
Bullseys,
EmptyState,
EmptyStateVariant,
EmptyStateIcon,
EmptyStateBody,
EmptyStateSecondaryActions,
Pagination,
PaginationVariant,
Title
} from '@patternfly/react-core';
import { SearchIcon, TimesIcon } from '@patternfly/react-icons';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';

## Examples

```js title=Basic
import React from 'react';
import {
  EmptyState,
  EmptyStateVariant,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Pagination,
  PaginationVariant,
  Title
} from '@patternfly/react-core';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { SearchIcon, TimesIcon } from '@patternfly/react-icons';

class ComplexPaginationTableDemo extends React.Component {
  constructor(props) {
    this.state = {
      res: [],
      perPage: 20,
      total: 100,
      page: 1,
      error: null,
      loading: false
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
  renderTable() {
    const { err, loading, res } = this.state;
    if (loading) {
      return (
        <Table
          cells={['Title', 'Body']}
          rows={[
            {
              heightAuto: true,
              cells: [{
                props: {colSpan: 8},
                title: (
                  <Bullseye>
                    <EmptyState variant={EmptyStateVariant.small}>
                      <EmptyStateIcon variant="container" component={Spinner} />
                      <Title size="lg">Loading</Title>
                    </EmptyState>
                  </Bullseye>
                )
              }]
            }
          ]}
        >
          <TableHeader />
          <TableBody />
        </Table>
      );
    }
    if (err) {
      return (
        <Table
          cells={['Title', 'Body']}
          rows={[
            {
              heightAuto: true,
              cells: [{
                props: {colSpan: 8},
                title: (
                  <Bullseye>
                    <EmptyState variant={EmptyStateVariant.small}>
                      <EmptyStateIcon icon={TimesIcon} />
                      <Title size="lg">Failed to fetch data</Title>
                    </EmptyState>
                  </Bullseye>
                )
              }]
            }
          ]}
        >
          <TableHeader />
          <TableBody />
        </Table>
      );
    }

    if(res.length === 0) {
      return (
      <Table
        cells={['Title', 'Body']}
        rows={[
          {
            heightAuto: true,
            cells: [{
              props: {colSpan: 8},
              title: (
              <Bullseye>
                <EmptyState variant={EmptyStateVariant.small}>
                  <EmptyStateIcon icon={SearchIcon} />
                  <Title size="lg">No results found</Title>
                </EmptyState>
              </Bullseye>
              )
            }]
          }
        ]}
      >
        <TableHeader />
        <TableBody />
      </Table>
      )
    }

    return (
      <>
        {this.renderPagination()}
        <Table cells={['Title', 'Body']} rows={res.map(post => [post.title, post.body])}>
          <TableHeader />
          <TableBody />
        </Table>
      </>
    );
  }

  render() {
    return <React.Fragment>{this.renderTable()}</React.Fragment>;
  }
}
```
