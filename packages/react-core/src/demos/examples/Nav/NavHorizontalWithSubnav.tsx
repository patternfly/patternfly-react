import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Divider,
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownList,
  Gallery,
  GalleryItem,
  MenuToggle,
  Masthead,
  MastheadBrand,
  MastheadContent,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSectionTypes,
  PageToggleButton,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';
import { DashboardBreadcrumb } from '@patternfly/react-core/dist/js/demos/DashboardWrapper';

export const NavHorizontalWithSubnav: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | number>(0);
  const [activeSubNavItem, setActiveSubNavItem] = React.useState<string | number>(7);

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveItem(selectedItem.itemId);

  const onSubNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveSubNavItem(selectedItem.itemId);

  const onDropdownToggle = () => setIsDropdownOpen((prevState) => !prevState);
  const onDropdownSelect = () => setIsDropdownOpen(false);
  const onKebabDropdownToggle = () => setIsKebabDropdownOpen((prevState) => !prevState);
  const onKebabDropdownSelect = () => setIsKebabDropdownOpen(false);
  const onFullKebabToggle = () => setIsFullKebabDropdownOpen((prevState) => !prevState);
  const onFullKebabSelect = () => setIsFullKebabDropdownOpen(false);

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav" variant="horizontal">
      <NavList>
        {/* Preventing default click behavior on each NavItem for demo purposes only */}
        <NavItem preventDefault itemId={0} isActive={activeItem === 0} to="#">
          System Panel
        </NavItem>
        <NavItem preventDefault itemId={1} isActive={activeItem === 1} to="#">
          Policy
        </NavItem>
        <NavItem preventDefault itemId={2} isActive={activeItem === 2} to="#">
          Authentication
        </NavItem>
        <NavItem preventDefault itemId={3} isActive={activeItem === 3} to="#">
          Network Services
        </NavItem>
        <NavItem preventDefault itemId={4} isActive={activeItem === 4} to="#">
          Server
        </NavItem>
        <NavItem preventDefault itemId={5} isActive={activeItem === 5} to="#">
          Other horizontal nav item 1
        </NavItem>
        <NavItem preventDefault itemId={6} isActive={activeItem === 6} to="#">
          Other horizontal nav item 2
        </NavItem>
      </NavList>
    </Nav>
  );
  const kebabDropdownItems = (
    <>
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
      <DropdownItem>
        <HelpIcon /> Help
      </DropdownItem>
    </>
  );
  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );

  const SubNav = (
    <Nav onSelect={onSubNavSelect} aria-label="Subnav" variant="horizontal-subnav">
      <NavList>
        {/* Preventing default click behavior on each NavItem for demo purposes only */}
        <NavItem preventDefault itemId={7} isActive={activeSubNavItem === 7} to="#">
          Horizontal subnav item 1
        </NavItem>
        <NavItem preventDefault itemId={8} isActive={activeSubNavItem === 8} to="#">
          Horizontal subnav item 2
        </NavItem>
        <NavItem preventDefault itemId={9} isActive={activeSubNavItem === 9} to="#">
          Horizontal subnav item 3
        </NavItem>
        <NavItem preventDefault itemId={10} isActive={activeSubNavItem === 10} to="#">
          Horizontal subnav item 4
        </NavItem>
        <NavItem preventDefault itemId={11} isActive={activeSubNavItem === 11} to="#">
          Horizontal subnav item 5
        </NavItem>
        <NavItem preventDefault itemId={12} isActive={activeSubNavItem === 12} to="#">
          Horizontal subnav item 6
        </NavItem>
        <NavItem preventDefault itemId={13} isActive={activeSubNavItem === 13} to="#">
          Horizontal subnav item 7
        </NavItem>
      </NavList>
    </Nav>
  );

  const headerToolbar = (
    <Toolbar id="toolbar" isFullHeight isStatic>
      <ToolbarContent>
        <ToolbarItem isOverflowContainer>{PageNav}</ToolbarItem>
        <ToolbarGroup
          variant="icon-button-group"
          align={{ default: 'alignRight' }}
          spacer={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          <ToolbarItem>
            <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} onClick={() => {}} />
          </ToolbarItem>
          <ToolbarGroup variant="icon-button-group" visibility={{ default: 'hidden', lg: 'visible' }}>
            <ToolbarItem>
              <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
            <Dropdown
              isOpen={isKebabDropdownOpen}
              onSelect={onKebabDropdownSelect}
              onOpenChange={setIsKebabDropdownOpen}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isKebabDropdownOpen}
                  onClick={onKebabDropdownToggle}
                  variant="plain"
                  aria-label="Settings and help"
                >
                  <EllipsisVIcon aria-hidden="true" />
                </MenuToggle>
              )}
            >
              <DropdownList>{kebabDropdownItems}</DropdownList>
            </Dropdown>
          </ToolbarItem>
          <ToolbarItem visibility={{ md: 'hidden' }}>
            <Dropdown
              isOpen={isFullKebabDropdownOpen}
              onSelect={onFullKebabSelect}
              onOpenChange={setIsFullKebabDropdownOpen}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isFullKebabDropdownOpen}
                  onClick={onFullKebabToggle}
                  variant="plain"
                  aria-label="Toolbar menu"
                >
                  <EllipsisVIcon aria-hidden="true" />
                </MenuToggle>
              )}
            >
              <DropdownGroup key="group 2" aria-label="User actions">
                <DropdownList>{userDropdownItems}</DropdownList>
              </DropdownGroup>
              <Divider />
              <DropdownList>{kebabDropdownItems}</DropdownList>
            </Dropdown>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
          <Dropdown
            isOpen={isDropdownOpen}
            onSelect={onDropdownSelect}
            onOpenChange={setIsDropdownOpen}
            popperProps={{ position: 'right' }}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                isExpanded={isDropdownOpen}
                onClick={onDropdownToggle}
                icon={<Avatar src={imgAvatar} alt="" />}
                isFullHeight
              >
                Ned Username
              </MenuToggle>
            )}
          >
            <DropdownList>{userDropdownItems}</DropdownList>
          </Dropdown>
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );
  const Header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const pageId = 'main-content-page-layout-horizontal-nav';
  const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

  return (
    <React.Fragment>
      <Page header={Header} skipToContent={PageSkipToContent} mainContainerId={pageId}>
        <PageSection type={PageSectionTypes.subNav} isWidthLimited>
          {SubNav}
        </PageSection>
        <PageSection type={PageSectionTypes.breadcrumb} isWidthLimited>
          {DashboardBreadcrumb}
        </PageSection>
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">
              Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
              of it’s relative line height of 1.5.
            </Text>
          </TextContent>
        </PageSection>
        <PageSection>
          <Gallery hasGutter>
            {Array.from({ length: 10 }).map((_value, index) => (
              <GalleryItem key={index}>
                <Card>
                  <CardBody>This is a card</CardBody>
                </Card>
              </GalleryItem>
            ))}
          </Gallery>
        </PageSection>
      </Page>
    </React.Fragment>
  );
};
