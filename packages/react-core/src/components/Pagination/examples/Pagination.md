---
id: Pagination
section: components
cssPrefix: null
propComponents: ["Pagination"]
ouia: true
---

## Examples
### Top
```js
import React from 'react';
import { Pagination, PaginationVariant } from "@patternfly/react-core";

class PaginationTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20
    };

    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };
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
    );
  }
}
```

### Bottom
```js
import React from 'react';
import { Pagination, PaginationVariant } from "@patternfly/react-core";

class PaginationBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };
    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };
  }

  render() {
    return (
      <Pagination
        itemCount={333}
        widgetId="pagination-options-menu-bottom"
        perPage={this.state.perPage}
        page={this.state.page}
        variant={PaginationVariant.bottom}
        onSetPage={this.onSetPage}
        onPerPageSelect={this.onPerPageSelect}
      />
    );
  }
}
```

### Disabled
```js
import React from 'react';
import { Pagination, PaginationVariant } from "@patternfly/react-core";

class PaginationDisabled extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20
    };

    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };
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
        isDisabled
      />
    );
  }
}
```

### No items
```js
import React from 'react';
import { Pagination, PaginationVariant } from "@patternfly/react-core";

class PaginationTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20
    };

    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };
  }

  render() {
    return (
      <Pagination
        itemCount={0}
        perPage={this.state.perPage}
        page={this.state.page}
        onSetPage={this.onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={this.onPerPageSelect}
      />
    );
  }
}
```

### One page
```js
import React from 'react';
import { Pagination, PaginationVariant } from "@patternfly/react-core";

class PaginationTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20
    };

    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };
  }

  render() {
    return (
      <Pagination
        itemCount={15}
        perPage={this.state.perPage}
        page={this.state.page}
        onSetPage={this.onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={this.onPerPageSelect}
      />
    );
  }
}
```

### Compact
```js
import React from 'react';
import { Pagination, PaginationVariant } from "@patternfly/react-core";

class PaginationTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20
    };

    this.onSetPage = (_event, pageNumber) => {
      this.setState({
        page: pageNumber
      });
    };

    this.onPerPageSelect = (_event, perPage) => {
      this.setState({
        perPage
      });
    };
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
        isCompact
      />
    );
  }
}
```
