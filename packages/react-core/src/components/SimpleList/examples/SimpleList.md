---
id: Simple list
section: components
cssPrefix: pf-c-simple-list
propComponents: ['SimpleList', 'SimpleListGroup', 'SimpleListItem']
beta: true
---

## Examples

### Simple list
```js
import { SimpleList, SimpleListItem } from '@patternfly/react-core';

class SimpleListDemo extends React.Component {
  onSelect(currentItem, currentItemProps) {
    console.log('new selection', currentItem, currentItemProps);
  }

  render() {
    const items = [
      <SimpleListItem key="item1" isCurrent>
        List item 1
      </SimpleListItem>,
      <SimpleListItem key="item2" component="a" href="#">
        List item 2
      </SimpleListItem>,
      <SimpleListItem key="item3">List item 3</SimpleListItem>
    ];

    return (
      <SimpleList onSelect={this.onSelect} aria-label="Simple List Example">
        {items}
      </SimpleList>
    );
  }
}
```

### Grouped list
```js
import { SimpleList, SimpleListItem, SimpleListGroup } from '@patternfly/react-core';

class SimpleListGroupDemo extends React.Component {
  onSelect(currentItem, currentItemProps) {
    console.log('new selection', currentItem, currentItemProps);
  }

  render() {
    const group1Items = [
      <SimpleListItem key="item1" isCurrent>
        List item 1
      </SimpleListItem>,
      <SimpleListItem key="item2" id="test 2">
        List item 2
      </SimpleListItem>,
      <SimpleListItem key="item3">List item 3</SimpleListItem>,
      <SimpleListItem key="item4">List item 4</SimpleListItem>
    ];

    const group2Items = [
      <SimpleListItem key="item5">List item 1</SimpleListItem>,
      <SimpleListItem key="item6" component="a" href="#">
        List item 2
      </SimpleListItem>,
      <SimpleListItem key="item7" component="a" href="#">
        List item 3
      </SimpleListItem>,
      <SimpleListItem key="item8">List item 4</SimpleListItem>
    ];

    return (
      <SimpleList onSelect={this.onSelect} aria-label="Grouped List Example">
        <SimpleListGroup title="Group 1" id="group-1">
          {group1Items}
        </SimpleListGroup>
        <SimpleListGroup title="Group 2" id="group-2">
          {group2Items}
        </SimpleListGroup>
      </SimpleList>
    );
  }
}
```
