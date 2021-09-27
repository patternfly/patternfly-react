---
id: Tree view
section: demos
---

## Examples

### Large TreeView performance test

```js
import React from 'react';
import { TreeView, Button } from '@patternfly/react-core';

class PerfTreeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeItems: {}, allExpanded: true, useMemo: true };

    this.onSelect = (evt, treeViewItem) => {
      let filtered = [];
      this.lotsOptions.forEach(item => this.filterItems(item, treeViewItem.id, filtered));
      this.setState({
        activeItems: filtered
      });
    };

    this.onToggle = evt => {
      const { allExpanded } = this.state;
      this.setState({
        allExpanded: allExpanded !== undefined ? !allExpanded : true
      });
    };

    this.onMemo = evt => {
      this.setState({
        useMemo: !this.state.useMemo
      });
    };

    this.filterItems = (item, input, list) => {
      if (item.children) {
        let childContained = false;
        item.children.forEach(child => {
          if (childContained) {
            this.filterItems(child, input, list);
          } else {
            childContained = this.filterItems(child, input, list);
          }
        });
        if (childContained) {
          list.push(item);
        }
      }

      if (item.id === input) {
        list.push(item);
        return true;
      } else {
        return false;
      }
    };

    this.lotsOptions = [];
    for (let i = 0; i < 2000; i++) {
      const childNum = Math.floor(Math.random() * 5) + 1;
      let childOptions = [];
      for (let j = 0; j < childNum; j++) {
        childOptions.push({ name: 'Child ' + j, id: `Option${i} - Child${j}` });
      }
      this.lotsOptions.push({ name: 'Option ' + i, id: i, children: childOptions });
    }
  }

  render() {
    const { activeItems, allExpanded, useMemo } = this.state;
    const tree = (
      <TreeView
        data={this.lotsOptions}
        activeItems={activeItems}
        onSelect={this.onSelect}
        allExpanded={allExpanded}
        defaultAllExpanded={true}
        useMemo={useMemo}
      />
    );

    return (
      <React.Fragment>
        <Button variant="link" onClick={this.onToggle}>
          {allExpanded && 'Collapse all'}
          {!allExpanded && 'Expand all'}
        </Button>
        <Button variant="primary" onClick={this.onMemo}>
          {useMemo && 'Turn off memoization'}
          {!useMemo && 'Turn on memoization'}
        </Button>
        {tree}
      </React.Fragment>
    );
  }
}
```
