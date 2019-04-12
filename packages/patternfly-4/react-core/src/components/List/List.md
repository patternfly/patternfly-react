---
title: 'List'
cssPrefix: 'pf-c-list'
---

## Simple List

import { List, ListItem } from '@patternfly/react-core';

```js
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
