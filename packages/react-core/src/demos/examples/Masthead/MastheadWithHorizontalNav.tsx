import React from 'react';
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
  MenuToggle,
  MenuToggleElement,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  SkipToContent,
  Content,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';

interface NavOnSelectProps {
  groupId: number | string;
  itemId: number | string;
  to: string;
}

export const MastheadWithHorizontalNav: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const toggleRef = React.useRef<HTMLButtonElement>(null);

  const onNavSelect = (_event: React.FormEvent<HTMLInputElement>, selectedItem: NavOnSelectProps) => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };

  const onDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onKebabDropdownToggle = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onFullKebabDropdownToggle = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };

  const onFullKebabDropdownSelect = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
  };

  const handleMenuKeys = (event: KeyboardEvent) => {
    if (!isOpen) {
      return;
    }
    if (menuRef.current?.contains(event.target as Node) || toggleRef.current?.contains(event.target as Node)) {
      if (event.key === 'Escape') {
        setIsOpen(!isOpen);
        toggleRef.current?.focus();
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && !menuRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleMenuKeys);
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleMenuKeys);
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, menuRef]);

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
      <DropdownItem key="settings">
        <CogIcon /> Settings
      </DropdownItem>
      <DropdownItem key="help">
        <HelpIcon /> Help
      </DropdownItem>
    </>
  );
  const userDropdownItems = [
    <>
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user">User management</DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </>
  ];

  const PageHorizontalNav = () => (
    <ToolbarItem isOverflowContainer>
      <Nav
        id="page-layout-horizontal-nav-horizontal-nav"
        onSelect={onNavSelect}
        aria-label="Global"
        variant="horizontal"
      >
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="#horizontal-1">
            Horizontal nav item 1
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="#horizontal-2">
            Horizontal nav item 2
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="#horizontal-3">
            Horizontal nav item 3
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="#horizontal-4">
            Horizontal nav item 4
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="#horizontal-5">
            Horizontal nav item 5
          </NavItem>
          <NavItem itemId={5} isActive={activeItem === 4} to="#horizontal-6">
            Horizontal nav item 6
          </NavItem>
          <NavItem itemId={6} isActive={activeItem === 4} to="#horizontal-7">
            Horizontal nav item 7
          </NavItem>
        </NavList>
      </Nav>
    </ToolbarItem>
  );

  const headerToolbar = (
    <Toolbar id="toolbar">
      <ToolbarContent>
        <PageHorizontalNav />
        <ToolbarGroup
          variant="action-group-plain"
          align={{ default: 'alignEnd' }}
          gap={{ default: 'gapNone', md: 'gapMd' }}
        >
          <ToolbarItem>
            <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
          </ToolbarItem>
          <ToolbarGroup variant="action-group-plain" visibility={{ default: 'hidden', lg: 'visible' }}>
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
              onOpenChange={(isOpen: boolean) => setIsKebabDropdownOpen(isOpen)}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
                <MenuToggle
                  ref={toggleRef}
                  onClick={onKebabDropdownToggle}
                  isExpanded={isKebabDropdownOpen}
                  variant="plain"
                  aria-label="Settings and help"
                  icon={<EllipsisVIcon aria-hidden="true" />}
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
                  icon={<EllipsisVIcon aria-hidden="true" />}
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
        <MastheadBrand>
          <MastheadLogo>
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const mainContainerId = 'main-content-page-layout-tertiary-nav';

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
      isManagedSidebar
      skipToContent={pageSkipToContent}
      breadcrumb={dashboardBreadcrumb}
      mainContainerId={mainContainerId}
      isBreadcrumbWidthLimited
      isBreadcrumbGrouped
      additionalGroupedContent={
        <PageSection>
          <Content>
            <Content component="h1">Main title</Content>
            <Content component="p">This is a full page demo.</Content>
          </Content>
        </PageSection>
      }
    >
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
  );
};
