---
id: List
section: components
cssPrefix: pf-c-list
propComponents: ['List', 'ListItem']
---

## Examples
### Basic
```js
import { List, ListItem } from '@patternfly/react-core';

SimpleList = (
  <List>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);
```

### Inline
```js
import { List, ListItem, ListVariant } from '@patternfly/react-core';

InlineList = (
  <List variant={ListVariant.inline}>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);
```

### Ordered
```js
import { List, ListItem, ListComponent, OrderType } from '@patternfly/react-core';

OrderedList = (
  <List component={ListComponent.ol} type={OrderType.number}>
    <ListItem>First</ListItem>
    <ListItem>Second</ListItem>
    <ListItem>Third</ListItem>
  </List>
);
```
