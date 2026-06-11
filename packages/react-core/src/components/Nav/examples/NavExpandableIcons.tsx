import { useState } from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import FolderIcon from '@patternfly/react-icons/dist/esm/icons/folder-icon';

export const NavExpandableIcons: React.FunctionComponent = () => {
  const [activeGroup, setActiveGroup] = useState('nav-expandable-icon-group-1');
  const [activeItem, setActiveItem] = useState('nav-expandable-icon-group-1_item-1');

  const onSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    result: { itemId: number | string; groupId: number | string }
  ) => {
    setActiveGroup(result.groupId as string);
    setActiveItem(result.itemId as string);
  };

  const onToggle = (
    _event: React.MouseEvent<HTMLButtonElement>,
    result: { groupId: number | string; isExpanded: boolean }
  ) => {
    // eslint-disable-next-line no-console
    console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
  };

  return (
    <Nav onSelect={onSelect} onToggle={onToggle} aria-label="Expandable with icons global">
      <NavList>
        <NavExpandable
          title="Expandable Group 1"
          icon={<CubeIcon />}
          groupId="nav-expandable-icon-group-1"
          isActive={activeGroup === 'nav-expandable-icon-group-1'}
          isExpanded
        >
          <NavItem
            preventDefault
            id="expandable-icon-1"
            to="#expandable-icon-1"
            groupId="nav-expandable-icon-group-1"
            itemId="nav-expandable-icon-group-1_item-1"
            isActive={activeItem === 'nav-expandable-icon-group-1_item-1'}
          >
            Subnav 1 Link 1
          </NavItem>
          <NavItem
            preventDefault
            id="expandable-icon-2"
            to="#expandable-icon-2"
            groupId="nav-expandable-icon-group-1"
            itemId="nav-expandable-icon-group-1_item-2"
            isActive={activeItem === 'nav-expandable-icon-group-1_item-2'}
          >
            Subnav 1 Link 2
          </NavItem>
        </NavExpandable>
        <NavExpandable
          title="Expandable Group 2"
          icon={<FolderIcon />}
          groupId="nav-expandable-icon-group-2"
          isActive={activeGroup === 'nav-expandable-icon-group-2'}
          isExpanded
        >
          <NavItem
            preventDefault
            id="expandable-icon-3"
            to="#expandable-icon-3"
            groupId="nav-expandable-icon-group-2"
            itemId="nav-expandable-icon-group-2_item-1"
            isActive={activeItem === 'nav-expandable-icon-group-2_item-1'}
          >
            Subnav 2 Link 1
          </NavItem>
          <NavItem
            preventDefault
            id="expandable-icon-4"
            to="#expandable-icon-4"
            groupId="nav-expandable-icon-group-2"
            itemId="nav-expandable-icon-group-2_item-2"
            isActive={activeItem === 'nav-expandable-icon-group-2_item-2'}
          >
            Subnav 2 Link 2
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};
