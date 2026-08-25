import { useState } from 'react';
import { Nav, NavItem, NavList, NavExpandable } from '@patternfly/react-core';
import RhUiCubesIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-cubes-icon';
import RhUiFolderIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-folder-icon';
import RhUiCodeIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-code-icon';
import RhUiCloudIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-cloud-icon';

export const NavDocked: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isGroupExpanded, setIsGroupExpanded] = useState(false);

  const onSelect = (_event: React.FormEvent<HTMLInputElement>, result: { itemId: number | string }) => {
    setActiveItem(result.itemId as number);
  };

  const onToggle = (
    _event: React.MouseEvent<HTMLButtonElement>,
    result: { groupId: number | string; isExpanded: boolean }
  ) => {
    setIsGroupExpanded(result.isExpanded);
  };

  return (
    <Nav variant="docked" onSelect={onSelect} onToggle={onToggle} aria-label="Default global" ouiaId="DefaultNav">
      <NavList>
        <NavItem
          icon={<RhUiCubesIcon />}
          preventDefault
          id="nav-default-link1"
          to="#nav-default-link1"
          itemId={0}
          isActive={activeItem === 0}
        >
          Default Link 1
        </NavItem>
        <NavItem
          icon={<RhUiCloudIcon />}
          preventDefault
          id="nav-default-link2"
          to="#nav-default-link2"
          itemId={1}
          isActive={activeItem === 1}
        >
          Default Link 2
        </NavItem>
        <NavItem
          icon={<RhUiCodeIcon />}
          preventDefault
          id="nav-default-link3"
          to="#nav-default-link3"
          itemId={2}
          isActive={activeItem === 2}
        >
          Default Link 3
        </NavItem>
        <NavExpandable
          title="Expandable Group 1"
          groupId="nav-expandable-group-1"
          icon={<RhUiFolderIcon />}
          isExpanded={isGroupExpanded}
          hasExpandableIcon
        >
          <NavItem
            preventDefault
            id="expandable-1"
            to="#expandable-1"
            groupId="nav-expandable-group-1"
            itemId={3}
            isActive={activeItem === 3}
          >
            Subnav 1 Link 1
          </NavItem>
          <NavItem
            preventDefault
            id="expandable-2"
            to="#expandable-2"
            groupId="nav-expandable-group-1"
            itemId={4}
            isActive={activeItem === 4}
          >
            Subnav 1 Link 2
          </NavItem>
          <NavItem
            preventDefault
            id="expandable-3"
            to="#expandable-3"
            groupId="nav-expandable-group-1"
            itemId={5}
            isActive={activeItem === 5}
          >
            Subnav 1 Link 3
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};
