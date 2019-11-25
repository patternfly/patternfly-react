---
title: 'Various table states'
section: 'demos'
---

## Examples

import React from 'react';
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Bullseye
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

```js title=Empty
import React from 'react';
import {
  EmptyState,
  EmptyStateIcon,
  EmptyStateBody,
  EmptyStateSecondaryActions,
  Bullseye
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { Table, TableHeader, TableBody} from '@patternfly/react-table';

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
        <Bullseye>
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
          </Bullseye>
        </React.Fragment>
    );
  }
}
```

```js title=Loading
import React from 'react';

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
          <Bullseye>
            <center><Spinner size="xl"/></center>
          </Bullseye>
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
