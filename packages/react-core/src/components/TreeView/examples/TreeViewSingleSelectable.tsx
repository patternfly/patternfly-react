import React from 'react';
import { TreeView, Button, TreeViewDataItem } from '@patternfly/react-core';

export const TreeViewSingleSelectable: React.FunctionComponent = () => {
  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();
  const [allExpanded, setAllExpanded] = React.useState<boolean>();

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
      setActiveItems([treeViewItem]);
    }
  };

  const onToggle = (_event: React.MouseEvent) => {
    setAllExpanded((prevAllExpanded) => !prevAllExpanded);
  };

  const options = [
    {
      name: 'Application launcher',
      id: 'example1-AppLaunch',
      children: [
        {
          name: 'Application 1',
          id: 'example1-App1',
          children: [
            { name: 'Settings', id: 'example1-App1Settings' },
            { name: 'Current', id: 'example1-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'example1-App2',
          children: [
            { name: 'Settings', id: 'example1-App2Settings' },
            {
              name: 'Loader',
              id: 'example1-App2Loader',
              children: [
                { name: 'Loading App 1', id: 'example1-LoadApp1' },
                { name: 'Loading App 2', id: 'example1-LoadApp2' },
                { name: 'Loading App 3', id: 'example1-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'example1-Cost',
      children: [
        {
          name: 'Application 3',
          id: 'example1-App3',
          children: [
            { name: 'Settings', id: 'example1-App3Settings' },
            { name: 'Current', id: 'example1-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'example1-Sources',
      children: [
        { name: 'Application 4', id: 'example1-App4', children: [{ name: 'Settings', id: 'example1-App4Settings' }] }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'example1-Long',
      children: [{ name: 'Application 5', id: 'example1-App5' }]
    }
  ];
  return (
    <React.Fragment>
      <Button variant="link" onClick={onToggle}>
        {allExpanded && 'Collapse all'}
        {!allExpanded && 'Expand all'}
      </Button>
      <TreeView
        aria-label="Tree View single selectable example"
        data={options}
        activeItems={activeItems}
        onSelect={onSelect}
        allExpanded={allExpanded}
      />
    </React.Fragment>
  );
};
