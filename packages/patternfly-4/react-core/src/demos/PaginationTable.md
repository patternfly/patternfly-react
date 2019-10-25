---
title: 'Pagination table'
section: 'demos'
---

## Examples
```
  Note: This demo uses the experimental Spinner component while data is loading.
```
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
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { global_danger_color_200 as globalDangerColor200 } from '@patternfly/react-tokens';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';

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
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { global_breakpoint_lg as globalBreakpointLg } from '@patternfly/react-tokens';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';

class ComplexPaginationTableDemo extends React.Component {
  constructor(props) {
    this.state = {
      res: [],
      perPage: 0,
      total: 0,
      page: 0,
      error: null,
      loading: true,
      forceLoadingState: false,
    };
    
    this.handleCheckboxChange = (checked) => {
      console.log(checked);
      this.setState({ forceLoadingState: checked });
    }
  }

  fetch(page, perPage) {
    this.setState({ loading: true });
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${perPage}`)
      .then(resp => resp.json())
      .then(resp => this.setState({ res: resp, perPage, page, loading: false, total: 100 }))
      .catch(err => this.setState({ error: err, loading: false, perPage: 0, page: 0, total: 0 }));
  }

  componentDidMount() {
    this.fetch(this.state.page || 1, this.state.perPage || 20);
  }
  
  renderLoadingStateCheckbox() {
    return (
      <Checkbox
        label="View loading state"
        isChecked={this.state.forceLoadingState}
        onChange={this.handleCheckboxChange}
        aria-label="view loading state checkbox"
        id="check"
        name="check"
      />
    )
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
    const { loading, res, error, forceLoadingState } = this.state;
    if (error) {
      const noResultsRows = [{
        heightAuto: true,
        cells: [
          {
            props: { colSpan: 8 },
            title: (
            <Bullseye>
              <EmptyState variant={EmptyStateVariant.small}>
                <EmptyStateIcon icon={ExclamationCircleIcon} color={globalDangerColor200.value} />
                <Title headingLevel="h2" size="lg">
                  Unable to connect
                </Title>
                <EmptyStateBody>
                  There was an error retrieving data. Check your connection and try again.
                </EmptyStateBody>
              </EmptyState>
            </Bullseye>
            )
          },
        ]
      }]
      
      return (
        <React.Fragment>
          <Table cells={['Title', 'Body']} rows={noResultsRows} aria-label="Pagination Table Demo">
            <TableHeader />
            <TableBody />
          </Table>
        </React.Fragment>
      );
    }
    
    const loadingRows = [{
      heightAuto: true,
      cells: [
        {
          props: { colSpan: 8 },
          title: (
          <Bullseye>
            <center><Spinner size="xl"/></center>
          </Bullseye>
          )
        },
      ]
    }];
    
    return (
      <React.Fragment>
        {this.renderLoadingStateCheckbox()}
        {this.renderPagination()}
        {!(loading || forceLoadingState) && (
          <Table cells={['Title', 'Body']} rows={res.map(post => [post.title, post.body])} aria-label="Pagination Table Demo">
            <TableHeader />
            <TableBody />
          </Table>
        )}
        {(loading || forceLoadingState) && (
          <Table cells={['Title', 'Body']} rows={loadingRows} aria-label="Pagination Table Demo">
            <TableHeader />
            <TableBody />
          </Table>
        )}
      </React.Fragment>
    );
  }
}
```

## Automated pagination table demo

```js
import React from 'react';
import { Pagination, PaginationVariant, Title } from '@patternfly/react-core';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

class ComplexPaginationTableDemo extends React.Component {
  constructor(props) {
    this.columns = [
      { title: "First column" },
      { title: "Second column" },
      { title: "Third column" }
    ];
    this.defaultRows = [
      { cells: [
        { title: "Row 1 column 1" },
        { title: "Row 1 column 2" },
        { title: "Row 1 column 3" }
      ]},
      { cells: [
        { title: "Row 2 column 1" },
        { title: "Row 2 column 2" },
        { title: "Row 2 column 3" }
      ]},
      { cells: [
        { title: "Row 3 column 1" },
        { title: "Row 3 column 2" },
        { title: "Row 3 column 3" }
      ]},
      { cells: [
        { title: "Row 4 column 1" },
        { title: "Row 4 column 2" },
        { title: "Row 4 column 3" }
      ]},
      { cells: [
        { title: "Row 5 column 1" },
        { title: "Row 5 column 2" },
        { title: "Row 5 column 3" }
      ]},
      { cells: [
        { title: "Row 6 column 1" },
        { title: "Row 6 column 2" },
        { title: "Row 6 column 3" }
      ]},
      { cells: [
        { title: "Row 7 column 1" },
        { title: "Row 7 column 2" },
        { title: "Row 7 column 3" }
      ]},
      { cells: [
        { title: "Row 8 column 1" },
        { title: "Row 8 column 2" },
        { title: "Row 8 column 3" }
      ]},
      { cells: [
        { title: "Row 9 column 1" },
        { title: "Row 9 column 2" },
        { title: "Row 9 column 3" }
      ]},
      { cells: [
        { title: "Row 10 column 1" },
        { title: "Row 10 column 2" },
        { title: "Row 10 column 3" }
      ]},
      { cells: [
        { title: "Row 11 column 1" },
        { title: "Row 11 column 2" },
        { title: "Row 11 column 3" }
      ]},
      { cells: [
        { title: "Row 12 column 1" },
        { title: "Row 12 column 2" },
        { title: "Row 12 column 3" }
      ]}
    ];
    this.state = {
      perPage: 10,
      page: 1,
      rows: this.defaultRows.slice(0, 10)
    };
  }

  updateState(_evt, newPage, newPerPage, startIdx, endIdx) {
    return {
      perPage: newPerPage,
      page: newPage,
      rows: this.defaultRows.slice(startIdx, endIdx)
    }
  }

  renderPagination(variant = 'top') {
    const { page, perPage, total } = this.state;
    return (
      <Pagination
        itemCount={this.defaultRows.length}
        page={page}
        perPage={perPage}
        defaultToFullPage
        onSetPage={(_evt, newPage, perPage, startIdx, endIdx) => this.setState(
          this.updateState(_evt, newPage, perPage, startIdx, endIdx)
        )}
        onPerPageSelect={(_evt, newPerPage, page, startIdx, endIdx) => this.setState(
          this.updateState(_evt, page, newPerPage, startIdx, endIdx)
        )}
        perPageOptions={[{ title: "3", value: 3 }, { title: "5", value: 5 }, { title: "12", value: 12}]}
      />
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        {this.renderPagination()}
        {!loading && (
          <Table aria-label="Automated pagination table" cells={this.columns} rows={this.state.rows.map(row => row.cells)}>
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
