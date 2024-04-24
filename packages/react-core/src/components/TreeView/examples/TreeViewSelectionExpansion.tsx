import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

export const TreeViewSelectableNodes: React.FunctionComponent = () => {
  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    setActiveItems([treeViewItem]);
  };

  const options = [
    {
      name: 'Application launcher',
      id: 'SelNodesTreeView-AppLaunch',
      children: [
        {
          name: 'Application 1',
          id: 'SelNodesTreeView-App1',
          children: [
            { name: 'Settings', id: 'SelNodesTreeView-App1Settings' },
            { name: 'Current', id: 'SelNodesTreeView-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'SelNodesTreeView-App2',
          children: [
            { name: 'Settings', id: 'SelNodesTreeView-App2Settings' },
            {
              name: 'Loader',
              id: 'SelNodesTreeView-App2Loader',
              children: [
                { name: 'Loading App 1', id: 'SelNodesTreeView-LoadApp1' },
                { name: 'Loading App 2', id: 'SelNodesTreeView-LoadApp2' },
                { name: 'Loading App 3', id: 'SelNodesTreeView-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'SelNodesTreeView-Cost',
      children: [
        {
          name: 'Application 3',
          id: 'SelNodesTreeView-App3',
          children: [
            { name: 'Settings', id: 'SelNodesTreeView-App3Settings' },
            { name: 'Current', id: 'SelNodesTreeView-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'SelNodesTreeView-Sources',
      children: [
        {
          name: 'Application 4',
          id: 'SelNodesTreeView-App4',
          children: [{ name: 'Settings', id: 'SelNodesTreeView-App4Settings' }]
        }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'SelNodesTreeView-Long',
      children: [{ name: 'Application 5', id: 'SelNodesTreeView-App5' }]
    }
  ];
  return (
    <TreeView
      aria-label="Tree View separate selection and expansion example"
      hasSelectableNodes
      data={options}
      activeItems={activeItems}
      onSelect={onSelect}
    />
  );
};
