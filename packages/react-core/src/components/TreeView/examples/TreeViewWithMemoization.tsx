import React from 'react';
import { TreeView, Button, TreeViewDataItem } from '@patternfly/react-core';

export const TreeViewWithMemoization: React.FunctionComponent = () => {
  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();
  const [allExpanded, setAllExpanded] = React.useState(false);

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    const filtered: TreeViewDataItem[] = [];
    options.forEach((item) => filterItems(item, treeViewItem.id, filtered));
    if (treeViewItem && !treeViewItem.children) {
      setActiveItems(filtered);
    }
  };

  const onToggle = (_event: React.MouseEvent) => {
    setAllExpanded((prevAllExpanded) => !prevAllExpanded);
  };

  const filterItems = (item: TreeViewDataItem, input: string | undefined, list: TreeViewDataItem[]) => {
    if (item.children) {
      let childContained = false;
      item.children.forEach((child) => {
        if (childContained) {
          filterItems(child, input, list);
        } else {
          childContained = filterItems(child, input, list);
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

  const options: TreeViewDataItem[] = [];
  for (let i = 1; i <= 20; i++) {
    const childNum = 5;
    const childOptions: TreeViewDataItem[] = [];
    for (let j = 1; j <= childNum; j++) {
      childOptions.push({ name: 'Child ' + j, id: `Option${i} - Child${j}` });
    }
    options.push({ name: 'Option ' + i, id: i.toString(), children: childOptions });
  }
  const tree = (
    <TreeView
      aria-label="Tree View with memoization example"
      data={options}
      activeItems={activeItems}
      onSelect={onSelect}
      allExpanded={allExpanded}
      useMemo
    />
  );

  return (
    <React.Fragment>
      <Button variant="link" onClick={onToggle}>
        {allExpanded && 'Collapse all'}
        {!allExpanded && 'Expand all'}
      </Button>
      {tree}
    </React.Fragment>
  );
};
