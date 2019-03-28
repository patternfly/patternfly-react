---
title: "Pagination"
cssPrefix: null
---
## Pagination Top
```js
import React from 'react';
import { Pagination } from '@patternfly/react-core';

class PaginationTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20
    }

    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      })
    }

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      })
    }
  }

  render() {
    return (
      <Pagination
        itemCount={523}
        perPage={this.state.perPage}
        page={this.state.page}
        onSetPage={this.onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={this.onPerPageSelect}
      />
    )
  }
}
```

## Pagination Bottom
```js
import React from 'react';
import { Pagination, PaginationVariant } from '@patternfly/react-core';

class PaginationBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      })
    }
    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      })
    }
  }

  render() {
    return (
      <Pagination itemCount={333}
        widgetId="pagination-options-menu-bottom"
        perPage={this.state.perPage}
        page={this.state.page}
        variant={PaginationVariant.bottom}
        onSetPage={this.onSetPage}
        onPerPageSelect={this.onPerPageSelect}
      />
    )
  }
}
```