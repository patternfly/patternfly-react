import { useState } from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import RhUiFolderFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-folder-fill-icon';
import RhUiFolderOpenFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-folder-open-fill-icon';
import RhUiCloudFillIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-cloud-fill-icon';
import RhUiLinkIcon from '@patternfly/react-icons/dist/esm/icons/rh-ui-link-icon';

export const NavIcons: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = useState(0);

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
          icon={<RhUiFolderFillIcon />}
        >
          Link 2
        </NavItem>
        <NavItem
          preventDefault
          id="nav-icon-link3"
          to="#nav-icon-link3"
          itemId={2}
          isActive={activeItem === 2}
          icon={<RhUiCloudFillIcon />}
        >
          Link 3
        </NavItem>
        <NavItem
          preventDefault
          id="nav-icon-link4"
          to="#nav-icon-link4"
          itemId={3}
          isActive={activeItem === 3}
          icon={<RhUiLinkIcon />}
        >
          Link 4
        </NavItem>
        <NavExpandable title="Expandable" icon={<RhUiFolderOpenFillIcon />} groupId="nav-icon-expandable">
          <NavItem
            preventDefault
            id="nav-icon-expandable-link1"
            to="#nav-icon-expandable-link1"
            itemId={4}
            isActive={activeItem === 4}
          >
            Subnav link 1
          </NavItem>
          <NavItem
            preventDefault
            id="nav-icon-expandable-link2"
            to="#nav-icon-expandable-link2"
            itemId={5}
            isActive={activeItem === 5}
          >
            Subnav link 2
          </NavItem>
        </NavExpandable>
      </NavList>
    </Nav>
  );
};
