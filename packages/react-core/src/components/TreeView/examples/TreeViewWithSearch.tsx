import React from 'react';
import {
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  TreeView,
  TreeViewDataItem,
  TreeViewSearch
} from '@patternfly/react-core';
export const TreeViewWithSearch: React.FunctionComponent = () => {
  const options = [
    {
      name: 'Application launcher',
      id: 'example2-AppLaunch',
      children: [
        {
          name: 'Application 1',
          id: 'example2-App1',
          children: [
            { name: 'Settings', id: 'example2-App1Settings' },
            { name: 'Current', id: 'example2-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'example2-App2',
          children: [
            { name: 'Settings', id: 'example2-App2Settings' },
            {
              name: 'Loader',
              id: 'example2-App2Loader',
              children: [
                { name: 'Loading App 1', id: 'example2-LoadApp1' },
                { name: 'Loading App 2', id: 'example2-LoadApp2' },
                { name: 'Loading App 3', id: 'example2-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'example2-Cost',
      children: [
        {
          name: 'Application 3',
          id: 'example2-App3',
          children: [
            { name: 'Settings', id: 'example2-App3Settings' },
            { name: 'Current', id: 'example2-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'example2-Sources',
      children: [
        {
          name: 'Application 4',
          id: 'example2-App4',
          children: [{ name: 'Settingexample2-s', id: 'example2-App4Settings' }]
        }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'example2-Long',
      children: [{ name: 'Application 5', id: 'example2-App5' }]
    }
  ];

  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();
  const [filteredItems, setFilteredItems] = React.useState(options);
  const [isFiltered, setIsFiltered] = React.useState(false);

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
      setActiveItems([treeViewItem]);
    }
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input === '') {
      setFilteredItems(options);
      setIsFiltered(false);
    } else {
      const filtered = options.map((opt) => Object.assign({}, opt)).filter((item) => filterItems(item, input));
      setFilteredItems(filtered);
      setIsFiltered(true);
    }
  };
  const filterItems = (item, input) => {
    if (item.name.toLowerCase().includes(input.toLowerCase())) {
      return true;
    }
    if (item.children) {
      return (
        (item.children = item.children
          .map((opt) => Object.assign({}, opt))
          .filter((child) => filterItems(child, input))).length > 0
      );
    }
  };
  const toolbar = (
    <Toolbar style={{ padding: 0 }}>
      <ToolbarContent style={{ padding: 0 }}>
        <ToolbarItem>
          <TreeViewSearch onSearch={onSearch} id="input-search" name="search-input" aria-label="Search input example" />
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  return (
    <TreeView
      aria-label="Tree View with search example"
      data={filteredItems}
      activeItems={activeItems}
      onSelect={onSelect}
      allExpanded={isFiltered}
      toolbar={toolbar}
    />
  );
};
