---
title: 'SimpleList'
section: experimental
cssPrefix: 'pf-c-simple-list'
typescript: true
propComponents: ['SimpleList', 'SimpleListGroup', 'SimpleListItem']
experimentalStage: 'early'
---

import { SimpleList, SimpleListGroup, SimpleListItem } from '@patternfly/react-core/dist/esm/experimental';

## Examples

```js title=Simple-list
import React from 'react';
import { SimpleList, SimpleListItem } from '@patternfly/react-core/dist/esm/experimental';

class SimpleListDemo extends React.Component {
  render() {
    const items = [
      <SimpleListItem key="item1" isCurrent>
        List item 1
      </SimpleListItem>,
      <SimpleListItem key="item2">List item 2</SimpleListItem>,
      <SimpleListItem key="item3">List item 3</SimpleListItem>
    ];

    return <SimpleList>{items}</SimpleList>;
  }
}
```

```js title=Grouped-list
import React from 'react';
import { SimpleList, SimpleListItem, SimpleListGroup } from '@patternfly/react-core/dist/esm/experimental';

class SimpleListGroupDemo extends React.Component {
  render() {
    const group1Items = [
      <SimpleListItem key="item1" isCurrent>
        List item 1
      </SimpleListItem>,
      <SimpleListItem key="item2">List item 2</SimpleListItem>,
      <SimpleListItem key="item3">List item 3</SimpleListItem>,
      <SimpleListItem key="item4">List item 4</SimpleListItem>
    ];

    const group2Items = [
      <SimpleListItem key="item5">List item 1</SimpleListItem>,
      <SimpleListItem key="item6">List item 2</SimpleListItem>,
      <SimpleListItem key="item7">List item 3</SimpleListItem>,
      <SimpleListItem key="item8">List item 4</SimpleListItem>
    ];

    return (
      <SimpleList>
        <SimpleListGroup title="Group 1">{group1Items}</SimpleListGroup>
        <SimpleListGroup title="Group 2">{group2Items}</SimpleListGroup>
      </SimpleList>
    );
  }
}
```
