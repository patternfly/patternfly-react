import { useState } from 'react';
import {
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
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
  Masthead,
  MastheadMain,
  MastheadLogo,
  MastheadContent,
  MastheadBrand,
  MastheadToggle,
  MenuToggle,
  MenuToggleElement,
  Nav,
  NavItem,
  NavList,
  NotificationBadge,
  NotificationBadgeVariant,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  SkipToContent,
  Content,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';
interface NavOnSelectProps {
  groupId: number | string;
  itemId: number | string;
  to: string;
}

export const PageStickySectionBreadcrumb: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = useState(false);
  const [isContextSelectorOpen, setIsContextSelectorOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const onNavSelect = (_event: React.FormEvent<HTMLInputElement>, selectedItem: NavOnSelectProps) => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(false);
  };

  const onKebabDropdownToggle = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(false);
  };

  const onFullKebabDropdownToggle = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };

  const onFullKebabDropdownSelect = () => {
    setIsFullKebabDropdownOpen(false);
  };

  const onContextSelectorToggle = () => {
    setIsContextSelectorOpen(!isContextSelectorOpen);
  };

  const onContextSelectorSelect = () => {
    setIsContextSelectorOpen(false);
  };

  const dashboardBreadcrumb = (
    <Breadcrumb>
      <BreadcrumbItem>Section home</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#">Section title</BreadcrumbItem>
      <BreadcrumbItem to="#" isActive>
        Section landing
      </BreadcrumbItem>
    </Breadcrumb>
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

  const contextSelectorDropdownItems = (
    <>
      <DropdownItem>Developer</DropdownItem>
      <DropdownItem>Admin</DropdownItem>
    </>
  );

  const userDropdownItems = (
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  );

  const headerToolbar = (
    <Toolbar id="toolbar" isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="action-group-plain"
          align={{ default: 'alignEnd' }}
          gap={{ default: 'gapNone', md: 'gapMd' }}
        >
          <ToolbarItem>
            <NotificationBadge aria-label="Notifications" variant={NotificationBadgeVariant.read} onClick={() => {}} />
          </ToolbarItem>
          <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
            <ToolbarItem>
              <Button aria-label="Settings" isSettings />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
            <Dropdown
              isOpen={isKebabDropdownOpen}
              onSelect={onKebabDropdownSelect}
              onOpenChange={(isOpen: boolean) => setIsKebabDropdownOpen(isOpen)}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={onKebabDropdownToggle}
                  isExpanded={isKebabDropdownOpen}
                  variant="plain"
                  aria-label="Settings and help"
                  icon={<EllipsisVIcon />}
                />
              )}
            >
              <DropdownList>{kebabDropdownItems}</DropdownList>
            </Dropdown>
          </ToolbarItem>
          <ToolbarItem visibility={{ md: 'hidden' }}>
            <Dropdown
              isOpen={isFullKebabDropdownOpen}
              onSelect={onFullKebabDropdownSelect}
              onOpenChange={(isOpen: boolean) => setIsFullKebabDropdownOpen(isOpen)}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={onFullKebabDropdownToggle}
                  isExpanded={isFullKebabDropdownOpen}
                  variant="plain"
                  aria-label="Toolbar menu"
                  icon={<EllipsisVIcon />}
                />
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
            onOpenChange={(isOpen: boolean) => setIsDropdownOpen(isOpen)}
            popperProps={{ position: 'right' }}
            toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
              <MenuToggle
                ref={toggleRef}
                onClick={onDropdownToggle}
                isExpanded={isDropdownOpen}
                icon={<Avatar src={imgAvatar} alt="" size="sm" />}
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

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton
            isHamburgerButton
            aria-label="Global navigation"
            isSidebarOpen={isSidebarOpen}
            onSidebarToggle={onSidebarToggle}
          />
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo>
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const pageNav = (
    <Nav onSelect={onNavSelect}>
      <NavList>
        <NavItem itemId={0} isActive={activeItem === 0} to="#system-panel">
          System panel
        </NavItem>
        <NavItem itemId={1} isActive={activeItem === 1} to="#policy">
          Policy
        </NavItem>
        <NavItem itemId={2} isActive={activeItem === 2} to="#auth">
          Authentication
        </NavItem>
        <NavItem itemId={3} isActive={activeItem === 3} to="#network">
          Network services
        </NavItem>
        <NavItem itemId={4} isActive={activeItem === 4} to="#server">
          Server
        </NavItem>
      </NavList>
    </Nav>
  );

  const pageContextSelector = (
    <Dropdown
      isOpen={isContextSelectorOpen}
      onSelect={onContextSelectorSelect}
      onOpenChange={(isOpen: boolean) => setIsContextSelectorOpen(isOpen)}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle
          tabIndex={isSidebarOpen ? undefined : -1}
          ref={toggleRef}
          onClick={onContextSelectorToggle}
          isExpanded={isContextSelectorOpen}
          isFullWidth
        >
          Developer
        </MenuToggle>
      )}
    >
      <DropdownList>{contextSelectorDropdownItems}</DropdownList>
    </Dropdown>
  );

  const sidebar = (
    <PageSidebar isSidebarOpen={isSidebarOpen}>
      <PageSidebarBody isContextSelector>{pageContextSelector}</PageSidebarBody>
      <PageSidebarBody>{pageNav}</PageSidebarBody>
    </PageSidebar>
  );

  const mainContainerId = 'main-content';

  const handleClick = (event) => {
    event.preventDefault();

    const mainContentElement = document.getElementById(mainContainerId);
    if (mainContentElement) {
      mainContentElement.focus();
    }
  };

  const pageSkipToContent = (
    <SkipToContent onClick={handleClick} href={`#${mainContainerId}`}>
      Skip to content
    </SkipToContent>
  );

  return (
    <Page
      masthead={masthead}
      sidebar={sidebar}
      skipToContent={pageSkipToContent}
      breadcrumb={dashboardBreadcrumb}
      mainContainerId={mainContainerId}
      isBreadcrumbWidthLimited
    >
      <PageSection isWidthLimited aria-labelledby="main-title">
        <Content>
          <Content component="h1" id="main-title">
            Main title
          </Content>
          <Content component="p">This is a full page demo.</Content>
        </Content>
      </PageSection>
      <PageSection isWidthLimited aria-label="Card gallery">
        <Gallery hasGutter>
          {Array.from({ length: 50 }).map((_value, index) => (
            <GalleryItem key={index}>
              <Card>
                <CardBody>This is a card</CardBody>
              </Card>
            </GalleryItem>
          ))}
        </Gallery>
      </PageSection>
    </Page>
  );
};
