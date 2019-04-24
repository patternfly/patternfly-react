---
title: 'List'
cssPrefix: 'pf-c-list'
---

import { List, ListItem } from '@patternfly/react-core';

## Simple list
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

## Inline list
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

## Grid list
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
