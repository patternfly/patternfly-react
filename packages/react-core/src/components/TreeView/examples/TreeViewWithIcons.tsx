import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import FolderOpenIcon from '@patternfly/react-icons/dist/esm/icons/folder-open-icon';

export const TreeViewWithIcons: React.FunctionComponent = () => {
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
      id: 'example4-AppLaunch',
      children: [
        {
          name: 'Application 1',
          id: 'example4-App1',
          children: [
            { name: 'Settings', id: 'example4-App1Settings' },
            { name: 'Current', id: 'example4-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'example4-App2',
          children: [
            { name: 'Settings', id: 'example4-App2Settings' },
            {
              name: 'Loader',
              id: 'example4-App2Loader',
              children: [
                { name: 'Loading App 1', id: 'example4-LoadApp1' },
                { name: 'Loading App 2', id: 'example4-LoadApp2' },
                { name: 'Loading App 3', id: 'example4-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'example4-Cost',
      children: [
        {
          name: 'Application 3',
          id: 'example4-App3',
          children: [
            { name: 'Settings', id: 'example4-App3Settings' },
            { name: 'Current', id: 'example4-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'example4-Sources',
      children: [
        { name: 'Application 4', id: 'example4-App4', children: [{ name: 'Settings', id: 'example4-App4Settings' }] }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'example4-Long',
      children: [{ name: 'Application 5', id: 'example4-App5' }]
    }
  ];
  return (
    <TreeView
      aria-label="Tree View with icons example"
      data={options}
      activeItems={activeItems}
      onSelect={onSelect}
      icon={<FolderIcon />}
      expandedIcon={<FolderOpenIcon />}
    />
  );
};
