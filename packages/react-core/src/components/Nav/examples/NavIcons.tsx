import React from 'react';
import { Nav, NavItem, NavList } from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';
import CloudIcon from '@patternfly/react-icons/dist/esm/icons/cloud-icon';
import LinkIcon from '@patternfly/react-icons/dist/esm/icons/link-icon';

export const NavIcons: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState(0);

  const onSelect = (_event: React.FormEvent<HTMLInputElement>, result: { itemId: number | string }) => {
    setActiveItem(result.itemId as number);
  };

  return (
    <Nav onSelect={onSelect} aria-label="Icon global" ouiaId="IconNav">
      <NavList>
        <NavItem
          preventDefault
          id="nav-icon-link1"
          to="#nav-icon-link1"
          itemId={0}
          isActive={activeItem === 0}
          icon={<CubeIcon />}
        >
          Link 1
        </NavItem>
        <NavItem
          preventDefault
          id="nav-icon-link2"
          to="#nav-icon-link2"
          itemId={1}
          isActive={activeItem === 1}
          icon={<FolderIcon />}
        >
          Link 2
        </NavItem>
        <NavItem
          preventDefault
          id="nav-icon-link3"
          to="#nav-icon-link3"
          itemId={2}
          isActive={activeItem === 2}
          icon={<CloudIcon />}
        >
          Link 3
        </NavItem>
        <NavItem
          preventDefault
          id="nav-icon-link4"
          to="#nav-icon-link4"
          itemId={3}
          isActive={activeItem === 3}
          icon={<LinkIcon />}
        >
          Link 4
        </NavItem>
      </NavList>
    </Nav>
  );
};
