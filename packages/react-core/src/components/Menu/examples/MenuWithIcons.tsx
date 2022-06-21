import React from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

export const MenuWithIcons: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event, itemId) => {
    // eslint-disable-next-line no-console
    console.log(`clicked ${itemId}`);
    setActiveItem(itemId);
  };

  return (
    <Menu onSelect={onSelect} activeItemId={activeItem}>
      <MenuContent>
        <MenuList>
          <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId={0}>
            From git
          </MenuItem>
          <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId={1}>
            Container image
          </MenuItem>
          <MenuItem icon={<CubeIcon aria-hidden />} itemId={2}>
            Docker file
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
