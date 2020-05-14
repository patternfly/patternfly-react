---
title: Table empty states
section: 'demos'
---

## Examples

import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Bullseye
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

```js title=Empty
import React from 'react';
import {
  Bullseye,
  Button,
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Title
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';

class EmptyStateDemo extends React.Component {

  render() {
  
    const columns = [
      { title: 'Servers' },
      { title: 'Threads' },
      { title: 'Applications' },
      { title: 'Workspaces' },
      { title: 'Status' },
      { title: 'Location' }
    ]
    
    const rows = [];
    
    return (
      <React.Fragment>
        <Table cells={columns} rows={rows} aria-label="Empty state demo">
          <TableHeader />
          <TableBody />
        </Table>
          <EmptyState>
            <EmptyStateIcon icon={SearchIcon} />
              <Title headingLevel="h5" size="lg">
                No results found
              </Title>
              <EmptyStateBody>
                No results match this filter criteria. Remove all filters or clear all filters to show results.
              </EmptyStateBody>
              <EmptyStateSecondaryActions>
                <Button variant="link" onClick={() => {}}>
                  Clear all filters
                </Button>
              </EmptyStateSecondaryActions>
            </EmptyState>
        </React.Fragment>
    );
  }
}
```

```js title=Loading
import React from 'react';
import { Bullseye } from "@patternfly/react-core";
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { Spinner } from '@patternfly/react-core';

class LoadingStateDemo extends React.Component {

  render() {
  
    const columns = [
      { title: 'Servers' },
      { title: 'Threads' },
      { title: 'Applications' },
      { title: 'Workspaces' },
      { title: 'Status' },
      { title: 'Location' }
    ]
    const rows = [{
      heightAuto: true,
      cells: [
        {
          props: { colSpan: 8 },
          title: (
            <center><Spinner size="xl"/></center>
          )
        },
      ]
    }];
    
    return (
      <Table cells={columns} rows={rows} aria-label="Loading Table Demo">
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

```

```js title=Error
import React from 'react';
import {
  Bullseye,
  EmptyState,
  EmptyStateBody,
  EmptyStateIcon,
  EmptyStateVariant,
  Title
} from '@patternfly/react-core';
import { Table, TableHeader, TableBody } from '@patternfly/react-table';
import { ExclamationCircleIcon } from '@patternfly/react-icons';
import { global_danger_color_200 as globalDangerColor200 } from '@patternfly/react-tokens';

class LoadingStateDemo extends React.Component {

  render() {
  
    const columns = [
      { title: 'Servers' },
      { title: 'Threads' },
      { title: 'Applications' },
      { title: 'Workspaces' },
      { title: 'Status' },
      { title: 'Location' }
    ]
    const rows = [{
      heightAuto: true,
      cells: [
        {
          props: { colSpan: 8 },
          title: (
            <EmptyState variant={EmptyStateVariant.small}>
              <EmptyStateIcon icon={ExclamationCircleIcon} color={globalDangerColor200.value} />
              <Title headingLevel="h2" size="lg">
                Unable to connect
              </Title>
              <EmptyStateBody>
                There was an error retrieving data. Check your connection and try again.
              </EmptyStateBody>
            </EmptyState>
          )
        },
      ]
    }];
    
    return (
      <Table cells={columns} rows={rows} aria-label="Error Table Demo">
        <TableHeader />
        <TableBody />
      </Table>
    );
  }
}

```
