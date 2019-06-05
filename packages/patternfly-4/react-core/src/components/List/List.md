---
title: 'List'
cssPrefix: 'pf-c-list'
typescript: true
propComponents: ['List', 'ListItem']
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
