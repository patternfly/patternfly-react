import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';

export const MenuWithDescription: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number; // eslint-disable-next-line no-console
    console.log(`clicked ${item}`);
    setActiveItem(item);
  };

  return (
    <Menu onSelect={onSelect} activeItemId={activeItem}>
      <MenuContent>
        <MenuList>
          <MenuItem icon={<CodeBranchIcon aria-hidden />} description="Description" itemId={0}>
            Action 1
          </MenuItem>
          <MenuItem isDisabled icon={<CodeBranchIcon aria-hidden />} description="Description" itemId={1}>
            Action 2 disabled
          </MenuItem>
          <MenuItem
            icon={<CodeBranchIcon aria-hidden />}
            description="Nunc non ornare ex, et pretium dui. Duis nec augue at urna elementum blandit tincidunt eget metus. Aenean sed metus id urna dignissim interdum. Aenean vel nisl vitae arcu vehicula pulvinar eget nec turpis. Cras sit amet est est."
            itemId={2}
          >
            Action 3
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
