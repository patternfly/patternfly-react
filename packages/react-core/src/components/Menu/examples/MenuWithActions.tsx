import React from 'react';
import { Menu, MenuContent, MenuGroup, MenuList, MenuItem, MenuItemAction } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import ClipboardIcon from '@patternfly/react-icons/dist/esm/icons/clipboard-icon';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

export const MenuWithActions: React.FunctionComponent = () => {
  const [selectedItems, setSelectedItems] = React.useState<number[]>([0, 2, 3]);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number;
    if (selectedItems.indexOf(item) !== -1) {
      setSelectedItems(selectedItems.filter(id => id !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <Menu
      onSelect={onSelect}
      // eslint-disable-next-line no-console
      onActionClick={(_event, itemId, actionId) => console.log(`clicked on ${itemId} - ${actionId}`)}
      activeItemId={0}
    >
      <MenuContent>
        <MenuGroup label="Actions" labelHeadingLevel="h3">
          <MenuList>
            <MenuItem
              isSelected={selectedItems.indexOf(0) !== -1}
              actions={
                <MenuItemAction
                  icon={<CodeBranchIcon aria-hidden />}
                  actionId="code"
                  // eslint-disable-next-line no-console
                  onClick={() => console.log('clicked on code icon')}
                  aria-label="Code"
                />
              }
              description="This is a description"
              itemId={0}
            >
              Item 1
            </MenuItem>
            <MenuItem
              isDisabled
              isSelected={selectedItems.indexOf(1) !== -1}
              actions={<MenuItemAction icon={<BellIcon aria-hidden />} actionId="alert" aria-label="Alert" />}
              description="This is a description"
              itemId={1}
            >
              Item 2
            </MenuItem>
            <MenuItem
              isSelected={selectedItems.indexOf(2) !== -1}
              actions={<MenuItemAction icon={<ClipboardIcon aria-hidden />} actionId="copy" aria-label="Copy" />}
              itemId={2}
            >
              Item 3
            </MenuItem>
            <MenuItem
              isSelected={selectedItems.indexOf(3) !== -1}
              actions={<MenuItemAction icon={<BarsIcon aria-hidden />} actionId="expand" aria-label="Expand" />}
              description="This is a description"
              itemId={3}
            >
              Item 4
            </MenuItem>
          </MenuList>
        </MenuGroup>
      </MenuContent>
    </Menu>
  );
};
