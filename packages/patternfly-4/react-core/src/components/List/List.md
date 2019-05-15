---
title: 'List'
cssPrefix: 'pf-c-list'
---

import { List, ListItem } from '@patternfly/react-core';

## Simple list

```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

class SimpleList extends React.Component {
  render() {
    return (
      <List>
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    );
  }
}
```

## Inline list

```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

class InlineList extends React.Component {
  render() {
    return (
      <List variant="inline">
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
      </List>
    );
  }
}
```

## Grid list

```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

class GridList extends React.Component {
  render() {
    return (
      <List variant="grid">
        <ListItem>First</ListItem>
        <ListItem>Second</ListItem>
        <ListItem>Third</ListItem>
        <ListItem>Fourth</ListItem>
        <ListItem>Fifth</ListItem>
        <ListItem>Sixth</ListItem>
      </List>
    );
  }
}
```
