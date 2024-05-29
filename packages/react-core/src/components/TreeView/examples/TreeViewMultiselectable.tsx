import React from 'react';
import { TreeView, TreeViewDataItem } from '@patternfly/react-core';

export const TreeViewMultiselectable: React.FunctionComponent = () => {
  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>([]);

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
      setActiveItems((prevActiveItems) => [...prevActiveItems, treeViewItem]);
    }
  };

  const options = [
    {
      name: 'Application launcher',
      id: 'multiselectExample-AppLaunch',
      children: [
        {
          name: 'Application 1',
          id: 'multiselectExample-App1',
          children: [
            { name: 'Settings', id: 'multiselectExample-App1Settings' },
            { name: 'Current', id: 'multiselectExample-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'multiselectExample-App2',
          children: [
            { name: 'Settings', id: 'multiselectExample-App2Settings' },
            {
              name: 'Loader',
              id: 'multiselectExample-App2Loader',
              children: [
                { name: 'Loading App 1', id: 'multiselectExample-LoadApp1' },
                { name: 'Loading App 2', id: 'multiselectExample-LoadApp2' },
                { name: 'Loading App 3', id: 'multiselectExample-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'multiselectExample-Cost',
      children: [
        {
          name: 'Application 3',
          id: 'multiselectExample-App3',
          children: [
            { name: 'Settings', id: 'multiselectExample-App3Settings' },
            { name: 'Current', id: 'multiselectExample-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'multiselectExample-Sources',
      children: [
        {
          name: 'Application 4',
          id: 'multiselectExample-App4',
          children: [{ name: 'Settings', id: 'multiselectExample-App4Settings' }]
        }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'multiselectExample-Long',
      children: [{ name: 'Application 5', id: 'multiselectExample-App5' }]
    }
  ];
  return (
    <TreeView
      aria-label="Tree View multiselectable example"
      isMultiSelectable
      data={options}
      activeItems={activeItems}
      onSelect={onSelect}
    />
  );
};
