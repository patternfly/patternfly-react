---
title: 'Pagination table'
section: 'demos'
---
import { 
  Pagination, 
  PaginationVariant, 
  Title, 
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Bullseye 
} from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';

## Examples
```js title=Basic
import React from 'react';
import {
  Pagination, 
  PaginationVariant, 
  Title, 
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Bullseye,
  Radio 
} from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';

class ComplexPaginationTableDemo extends React.Component {
  constructor(props) {
    this.state = {
      res: [],
      perPage: 20,
      total: 100,
      page: 1,
      error: null,
      loading: true,
      displayState: "withData",
    };
    
    this.handleDisplayChange = this.handleDisplayChange.bind(this)
  }
  
  handleDisplayChange(_, event) {
    const { value } = event.currentTarget;
    this.setState({ displayState: value })
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
  
  renderDisplayStateRadio() {
    return (
      <React.Fragment>
        <Radio
          isChecked={this.state.displayState === "withData"}
          name="withData"
          onChange={this.handleDisplayChange}
          label="Display with data"
          id="withData"
          value="withData"
        />
        <Radio
          isChecked={this.state.displayState === "noData"}
          name="noData"
          onChange={this.handleDisplayChange}
          label="Display with no data"
          id="noData"
          value="noData"
        />
        <Radio
          isChecked={this.state.displayState === "loading"}
          name="loading"
          onChange={this.handleDisplayChange}
          label="Display loading data"
          id="loading"
          value="loading"
        />
      </React.Fragment>
    )
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
    const { loading, res, displayState } = this.state;
    if (res.length === 0 || displayState === "noData") {
      const rows = [{
        heightAuto: true,
        cells: [
          {
            props: { colSpan: 8 },
            title: (
            <Bullseye>
              <EmptyState variant={EmptyStateVariant.small}>
                <EmptyStateIcon icon={SearchIcon} />
                <Title headingLevel="h2" size="lg">
                  No results found
                </Title>
                <EmptyStateBody>
                  No results match the filter criteria. Remove all filters or clear all filters to show results.
                </EmptyStateBody>
              </EmptyState>
            </Bullseye>
            )
          },
        ]
      }]
      
      return (
        <React.Fragment>
          {this.renderDisplayStateRadio()}
          <Table cells={['Title', 'Body']} rows={rows} aria-label="Pagination Table Demo">
            <TableHeader />
            <TableBody />
          </Table>
        </React.Fragment>
      );
    }
    
    return (
      <React.Fragment>
        {this.renderDisplayStateRadio()}
        {this.renderPagination()}
        {!loading && displayState === "withData" && (
          <Table cells={['Title', 'Body']} rows={res.map(post => [post.title, post.body])} aria-label="Pagination Table Demo">
            <TableHeader />
            <TableBody />
          </Table>
        )}
        {(loading || displayState === "loading") && <center><Spinner size="xl"/></center>}
      </React.Fragment>
    );
  }
}
```
