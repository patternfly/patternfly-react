---
title: 'List'
section: components
cssPrefix: 'pf-c-list'
typescript: true
propComponents: ['List', 'ListItem']
---

import { List, ListItem } from '@patternfly/react-core';

## Examples
```js title=Basic
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

```js title=Inline
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
