import React from 'react';
import { TreeView, Button, Dropdown, DropdownItem, KebabToggle, TreeViewDataItem } from '@patternfly/react-core';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import HamburgerIcon from '@patternfly/react-icons/dist/esm/icons/hamburger-icon';

export const TreeViewIconActionItems: React.FunctionComponent = () => {
  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();
  const [isOpen, setIsOpen] = React.useState<boolean>();

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
      setActiveItems([treeViewItem]);
    }
  };

  const onToggle = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  const onAppLaunchSelect = (_event: React.SyntheticEvent<HTMLDivElement> | undefined) => {
    setIsOpen(!isOpen);
  };

  const dropdownItems = [
    <DropdownItem key="link">Link</DropdownItem>,
    <DropdownItem key="action" component="button">
      Action
    </DropdownItem>,
    <DropdownItem key="disabled link" isDisabled href="www.google.com">
      Disabled Link
    </DropdownItem>,
    <DropdownItem key="disabled action" isDisabled component="button">
      Disabled Action
    </DropdownItem>
  ];
  const options = [
    {
      name: 'Application launcher',
      id: 'example7-AppLaunch',
      action: (
        <Dropdown
          onSelect={onAppLaunchSelect}
          toggle={<KebabToggle onToggle={onToggle} />}
          isOpen={isOpen}
          isPlain
          dropdownItems={dropdownItems}
        />
      ),
      children: [
        {
          name: 'Application 1',
          id: 'example7-App1',
          action: (
            <Button variant="plain" aria-label="Launch app 1">
              <ClipboardIcon />
            </Button>
          ),
          actionProps: {
            'aria-label': 'Launch app 1'
          },
          children: [
            { name: 'Settings', id: 'example7-App1Settings' },
            { name: 'Current', id: 'example7-App1Current' }
          ]
        },
        {
          name: 'Application 2',
          id: 'example7-App2',
          action: (
            <Button variant="plain" aria-label="Launch app 1">
              <HamburgerIcon />
            </Button>
          ),
          children: [
            { name: 'Settings', id: 'example7-App2Settings' },
            {
              name: 'Loader',
              id: 'example7-App2Loader',
              children: [
                { name: 'Loading App 1', id: 'example7-LoadApp1' },
                { name: 'Loading App 2', id: 'example7-LoadApp2' },
                { name: 'Loading App 3', id: 'example7-LoadApp3' }
              ]
            }
          ]
        }
      ],
      defaultExpanded: true
    },
    {
      name: 'Cost management',
      id: 'example7-Cost',
      children: [
        {
          name: 'Application 3',
          id: 'example7-App3',
          children: [
            { name: 'Settings', id: 'example7-App3Settings' },
            { name: 'Current', id: 'example7-App3Current' }
          ]
        }
      ]
    },
    {
      name: 'Sources',
      id: 'example7-Sources',
      children: [
        { name: 'Application 4', id: 'example7-App4', children: [{ name: 'Settings', id: 'example7-App4Settings' }] }
      ]
    },
    {
      name: 'Really really really long folder name that overflows the container it is in',
      id: 'example7-Long',
      children: [{ name: 'Application 5', id: 'example7-App5' }]
    }
  ];
  return <TreeView data={options} activeItems={activeItems} onSelect={onSelect} />;
};
