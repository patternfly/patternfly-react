import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Content,
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
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  PageToggleButton,
  SkipToContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';

export const NavManual: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [isMobileView, setIsMobileView] = React.useState(false);
  const [isSidebarOpenDesktop, setIsSidebarOpenDesktop] = React.useState(true);
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState<string | number>(0);

  const onNavSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    selectedItem: {
      groupId: number | string;
      itemId: number | string;
      to: string;
    }
  ) => setActiveItem(selectedItem.itemId);

  const onDropdownToggle = () => setIsDropdownOpen((prevState) => !prevState);
  const onDropdownSelect = () => setIsDropdownOpen(false);
  const onKebabDropdownToggle = () => setIsKebabDropdownOpen((prevState) => !prevState);
  const onKebabDropdownSelect = () => setIsKebabDropdownOpen(false);
  const onFullKebabToggle = () => setIsFullKebabDropdownOpen((prevState) => !prevState);
  const onFullKebabSelect = () => setIsFullKebabDropdownOpen(false);
  const onSidebarToggleDesktop = () => setIsSidebarOpenDesktop((prevState) => !prevState);
  const onSidebarToggleMobile = () => setIsSidebarOpenMobile((prevState) => !prevState);

  interface PageOptions {
    mobileView: boolean;
    windowSize: number;
  }

  const onPageResize = (_event: MouseEvent | TouchEvent | React.KeyboardEvent, { mobileView }: PageOptions) =>
    setIsMobileView(mobileView);

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
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

  const headerToolbar = (
    <Toolbar id="toolbar" isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="action-group-plain"
          align={{ default: 'alignEnd' }}
          gap={{ default: 'gapNone', md: 'gapMd' }}
        >
          <ToolbarItem>
            <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} onClick={() => {}} />
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
              onOpenChange={setIsKebabDropdownOpen}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isKebabDropdownOpen}
                  onClick={onKebabDropdownToggle}
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
            onOpenChange={setIsDropdownOpen}
            popperProps={{ position: 'right' }}
            toggle={(toggleRef) => (
              <MenuToggle
                ref={toggleRef}
                isExpanded={isDropdownOpen}
                onClick={onDropdownToggle}
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
            onSidebarToggle={isMobileView ? onSidebarToggleMobile : onSidebarToggleDesktop}
            variant="plain"
            aria-label="Global navigation"
          >
            <BarsIcon />
          </PageToggleButton>
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

  const Sidebar = (
    <PageSidebar isSidebarOpen={isMobileView ? isSidebarOpenMobile : isSidebarOpenDesktop}>
      <PageSidebarBody>{PageNav}</PageSidebarBody>
    </PageSidebar>
  );
  const pageId = 'main-content-page-layout-manual-nav';

  const handleClick = (event) => {
    event.preventDefault();

    const mainContentElement = document.getElementById(pageId);
    if (mainContentElement) {
      mainContentElement.focus();
    }
  };

  const PageSkipToContent = (
    <SkipToContent onClick={handleClick} href={`#${pageId}`}>
      Skip to content
    </SkipToContent>
  );

  return (
    <React.Fragment>
      <Page
        masthead={masthead}
        sidebar={Sidebar}
        onPageResize={onPageResize}
        skipToContent={PageSkipToContent}
        mainContainerId={pageId}
      >
        <PageSection>
          <Content>
            <h1>Main title</h1>
            <p>
              Body text should be Red Hat Text at 1rem(16px). It should have leading of 1.5rem(24px) because <br />
              of its relative line height of 1.5.
            </p>
          </Content>
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
