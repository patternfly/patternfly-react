import React from 'react';
import {
  Page,
  Nav,
  NavList,
  NavItem,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  PageSectionVariants,
  Menu,
  MenuContent,
  MenuList,
  MenuItem
} from '@patternfly/react-core';
import DashboardHeader from '../DashboardHeader';

export const NavFlyout: React.FunctionComponent = () => {
  const [activeItem, setActiveItem] = React.useState<number | string>(0);

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveItem(selectedItem.itemId);

  const onMenuSelect = (_event: React.MouseEvent | undefined, itemId: string | number | undefined) => {
    itemId && setActiveItem(itemId);
  };

  const numFlyouts = 5;
  const FlyoutMenu = ({ depth, children }) => (
    <Menu key={depth} containsFlyout isNavFlyout id={`menu-${depth}`} onSelect={onMenuSelect}>
      <MenuContent>
        <MenuList>
          <MenuItem flyoutMenu={children} itemId={`next-menu-${depth}`}>
            Additional settings
          </MenuItem>
          {[...Array(numFlyouts - depth).keys()].map((j) => (
            <MenuItem key={`${depth}-${j}`} itemId={`${depth}-${j}`} to={`#menu-link-${depth}-${j}`}>
              Settings menu {depth} item {j}
            </MenuItem>
          ))}
          <MenuItem flyoutMenu={children} itemId={`next-menu-2-${depth}`}>
            Additional settings
          </MenuItem>
        </MenuList>
      </MenuContent>
    </Menu>
  );
  let curFlyout = <FlyoutMenu depth={1}>{}</FlyoutMenu>;
  for (let i = 2; i < numFlyouts - 1; i++) {
    curFlyout = <FlyoutMenu depth={i}>{curFlyout}</FlyoutMenu>;
  }

  const Sidebar = (
    <PageSidebar style={{ overflow: 'visible' }}>
      <PageSidebarBody>
        <Nav onSelect={onNavSelect}>
          <NavList>
            <NavItem preventDefault id="flyout-link1" to="#flyout-link1" itemId={0} isActive={activeItem === 0}>
              System Panel
            </NavItem>
            <NavItem preventDefault flyout={curFlyout} id="flyout-link2" itemId={1} isActive={activeItem === 1}>
              Settings
            </NavItem>
            <NavItem preventDefault id="flyout-link3" to="#flyout-link3" itemId={2} isActive={activeItem === 2}>
              Authentication
            </NavItem>
          </NavList>
        </Nav>
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page header={<DashboardHeader />} sidebar={Sidebar} isManagedSidebar>
      <PageSection variant={PageSectionVariants.darker}>Section with darker background</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section with dark background</PageSection>
      <PageSection variant={PageSectionVariants.light}>Section with light background</PageSection>
    </Page>
  );
};
