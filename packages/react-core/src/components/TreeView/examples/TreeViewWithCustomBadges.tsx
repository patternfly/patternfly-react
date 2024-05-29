import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

export const TreeViewCustomBadges: React.FunctionComponent = () => {
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
      id: 'example6-AppLaunch',
      customBadgeContent: '2 applications',
      children: [
        {
          name: 'Application 1',
          id: 'example6-App1',
          customBadgeContent: '2 children',
          children: [
            { name: 'Settings', id: 'example6-App1Settings' },
            { name: 'Current', id: 'example6-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'example6-App2',
          customBadgeContent: '2 children',
          children: [
            { name: 'Settings', id: 'example6-App2Settings' },
            {
              name: 'Loader',
              id: 'example6-App2Loader',
              customBadgeContent: '3 loading apps',
              children: [
                { name: 'Loading app 1', id: 'example6-LoadApp1' },
                { name: 'Loading app 2', id: 'example6-LoadApp2' },
                { name: 'Loading app 3', id: 'example6-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'example6-Cost',
      customBadgeContent: '1 applications',
      children: [
        {
          name: 'Application 3',
          id: 'example6-App3',
          customBadgeContent: '2 children',
          children: [
            { name: 'Settings', id: 'example6-App3Settings' },
            { name: 'Current', id: 'example6-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'example6-Sources',
      customBadgeContent: '1 source',
      children: [
        {
          name: 'Application 4',
          id: 'example6-App4',
          customBadgeContent: '1 child',
          children: [{ name: 'Settings', id: 'example6-App4Settings' }]
        }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'example6-Long',
      customBadgeContent: '1 application',
      children: [{ name: 'Application 5', id: 'example6-App5' }]
    }
  ];
  return (
    <TreeView
      aria-label="Tree View with custom badges example"
      data={options}
      activeItems={activeItems}
      onSelect={onSelect}
      hasBadges
    />
  );
};
