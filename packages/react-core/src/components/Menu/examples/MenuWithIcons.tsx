import { useState } from 'react';
import { Menu, MenuContent, MenuList, MenuItem } from '@patternfly/react-core';
import RhUiBranchFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-branch-fill-icon';
import RhUiServerStackFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-server-stack-fill-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';

export const MenuWithIcons: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState(0);

  const onSelect = (_event: React.MouseEvent<Element, MouseEvent> | undefined, itemId: number | string | undefined) => {
    const item = itemId as number; // eslint-disable-next-line no-console
    console.log(`clicked ${item}`);
    setActiveItem(item);
  };

  return (
    <Menu onSelect={onSelect} activeItemId={activeItem}>
      <MenuContent>
        <MenuList>
          <MenuItem icon={<RhUiBranchFillIcon />} itemId={0}>
            From git
          </MenuItem>
          <MenuItem icon={<RhUiServerStackFillIcon />} itemId={1}>
            Container image
          </MenuItem>
          <MenuItem icon={<CubeIcon />} itemId={2}>
            Docker file
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
};
