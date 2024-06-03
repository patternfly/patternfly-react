import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

export const TreeViewBadges: React.FunctionComponent = () => {
  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
      setActiveItems([treeViewItem]);
    }
  };

  const options = [
    {
      name: 'Application launcher',
      id: 'example5-AppLaunch',
      children: [
        {
          name: 'Application 1',
          id: 'example5-App1',
          children: [
            { name: 'Settings', id: 'example5-App1Settings' },
            { name: 'Current', id: 'example5-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'example5-App2',
          children: [
            { name: 'Settings', id: 'example5-App2Settings' },
            {
              name: 'Loader',
              id: 'example5-App2Loader',
              children: [
                { name: 'Loading App 1', id: 'example5-LoadApp1' },
                { name: 'Loading App 2', id: 'example5-LoadApp2' },
                { name: 'Loading App 3', id: 'example5-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'example5-Cost',
      children: [
        {
          name: 'Application 3',
          id: 'example5-App3',
          children: [
            { name: 'Settings', id: 'example5-App3Settings' },
            { name: 'Current', id: 'example5-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'example5-Sources',
      children: [
        {
          name: 'Application 4',
          id: 'example5-App4',
          children: [{ name: 'Settings', id: 'example5-App4Settings' }]
        }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'example5-Long',
      children: [{ name: 'Application 5', id: 'example5-App5' }]
    }
  ];

  return (
    <TreeView
      aria-label="Tree View with badges example"
      data={options}
      activeItems={activeItems}
      onSelect={onSelect}
      hasBadges
    />
  );
};
