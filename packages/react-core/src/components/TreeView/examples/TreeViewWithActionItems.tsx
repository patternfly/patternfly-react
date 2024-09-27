import React from 'react';
import {
  TreeView,
  Button,
  Dropdown,
  DropdownList,
  DropdownItem,
  MenuToggle,
  TreeViewDataItem
} from '@patternfly/react-core';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import HamburgerIcon from '@patternfly/react-icons/dist/esm/icons/hamburger-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

export const TreeViewWithActionItems: React.FunctionComponent = () => {
  const [activeItems, setActiveItems] = React.useState<TreeViewDataItem[]>();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onSelect = (_event: React.MouseEvent, treeViewItem: TreeViewDataItem) => {
    // Ignore folders for selection
    if (treeViewItem && !treeViewItem.children) {
      setActiveItems([treeViewItem]);
    }
  };

  const onToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const onAppLaunchSelect = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const options = [
    {
      name: 'Application launcher',
      id: 'example7-AppLaunch',
      action: (
        <Dropdown
          onSelect={onAppLaunchSelect}
          isOpen={isOpen}
          onOpenChange={(isOpen) => setIsOpen(isOpen)}
          toggle={(toggleRef) => (
            <MenuToggle
              ref={toggleRef}
              isExpanded={isOpen}
              onClick={onToggle}
              variant="plain"
              aria-label="Tree view with actions example kebab toggle"
              icon={<EllipsisVIcon />}
            />
          )}
        >
          <DropdownList>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem
              to="#default-link2"
              // Prevent the default onClick functionality for example purposes
              onClick={(ev) => ev.preventDefault()}
            >
              Link
            </DropdownItem>
            <DropdownItem isDisabled>Disabled Action</DropdownItem>
            <DropdownItem isDisabled to="#default-link4">
              Disabled Link
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      ),
      children: [
        {
          name: 'Application 1',
          id: 'example7-App1',
          action: <Button variant="plain" aria-label="Launch app 1" icon={<ClipboardIcon />} />,
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
          action: <Button variant="plain" aria-label="Launch app 1" icon={<HamburgerIcon />} />,
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
  return (
    <TreeView
      aria-label="Tree View with actions example"
      data={options}
      activeItems={activeItems}
      onSelect={onSelect}
    />
  );
};
