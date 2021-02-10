---
id: List
section: components
cssPrefix: pf-c-list
propComponents: ['List', 'ListItem']
---

## Examples
### Basic
```js
import React from 'react';
import { List, ListItem } from '@patternfly/react-core';

<List>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
  <ListItem>Third</ListItem>
</List>
```

### Inline
```js
import React from 'react';
import { List, ListItem, ListVariant } from '@patternfly/react-core';

<List variant={ListVariant.inline}>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
  <ListItem>Third</ListItem>
</List>
```

### Ordered
```js
import React from 'react';
import { List, ListItem, ListComponent, OrderType } from '@patternfly/react-core';

<List component={ListComponent.ol} type={OrderType.number}>
  <ListItem>First</ListItem>
  <ListItem>Second</ListItem>
  <ListItem>Third</ListItem>
</List>
```
