---
title: "List"
cssPrefix: "pf-c-list"
---
## Simple List
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

SimpleList = (
  <List>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);
```

## Inline List
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

InlineList = (
  <List variant="inline">
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);
```

## Grid List
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

GridList = () => (
  <List variant="grid">
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
    <ListItem>Fourth</ListItem>
    <ListItem>Fifth</ListItem>
    <ListItem>Sixth</ListItem>
  </List>
);
```