import React from 'react';
import {
  ApplicationLauncher,
  ApplicationLauncherItem,
  Avatar,
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownToggle,
  Gallery,
  GalleryItem,
  KebabToggle,
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
  PageSidebar,
  PageToggleButton,
  SkipToContent,
  Text,
  TextContent,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';

interface NavOnSelectProps {
  groupId: number | string;
  itemId: number | string;
  to: string;
  event: React.FormEvent<HTMLInputElement>;
}

export const PageStickySectionGroup: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isAppLauncherOpen, setIsAppLauncherOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(1);

  const onNavSelect = (selectedItem: NavOnSelectProps) => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };

  const onDropdownToggle = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onKebabDropdownToggle = (isOpen: boolean) => {
    setIsKebabDropdownOpen(isOpen);
  };

  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onAppLauncherToggle = (isOpen: boolean) => {
    setIsAppLauncherOpen(isOpen);
  };

  const onAppLauncherSelect = () => {
    setIsAppLauncherOpen(!isAppLauncherOpen);
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

  const kebabDropdownItems = [
    <DropdownItem key="settings">
      <CogIcon /> Settings
    </DropdownItem>,
    <DropdownItem key="help">
      <HelpIcon /> Help
    </DropdownItem>
  ];

  const userDropdownItems = [
    <DropdownGroup key="group 2">
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user" component="button">
        User management
      </DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </DropdownGroup>
  ];

  const appLauncherItems = [
    <ApplicationLauncherItem key="application_1a" href="#">
      Application 1 (anchor link)
    </ApplicationLauncherItem>,
    <ApplicationLauncherItem key="application_2a" component="button" onClick={() => alert('Clicked item 2')}>
      Application 2 (button with onClick)
    </ApplicationLauncherItem>
  ];

  const headerToolbar = (
    <Toolbar id="toolbar" isFullHeight isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="icon-button-group"
          alignment={{ default: 'alignRight' }}
          spacer={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          <ToolbarItem>
            <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
          </ToolbarItem>
          <ToolbarGroup variant="icon-button-group" visibility={{ default: 'hidden', lg: 'visible' }}>
            <ToolbarItem visibility={{ default: 'hidden', md: 'hidden', lg: 'visible' }}>
              <ApplicationLauncher
                onSelect={onAppLauncherSelect}
                onToggle={onAppLauncherToggle}
                isOpen={isAppLauncherOpen}
                items={appLauncherItems}
              />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
            </ToolbarItem>
            <ToolbarItem>
              <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
            </ToolbarItem>
          </ToolbarGroup>
          <ToolbarItem visibility={{ lg: 'hidden' }}>
            <Dropdown
              isPlain
              position="right"
              onSelect={onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
          <Dropdown
            isFullHeight
            onSelect={onDropdownSelect}
            isOpen={isDropdownOpen}
            toggle={
              <DropdownToggle icon={<Avatar src={imgAvatar} alt="Avatar" />} onToggle={onDropdownToggle}>
                Ned Username
              </DropdownToggle>
            }
            dropdownItems={userDropdownItems}
          />
        </ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand
            widths={{ default: '180px', md: '180px', '2xl': '220px' }}
            src="/assets/images/logo__pf--reverse--base.png"
            alt="Fallback patternFly default logo"
          >
            <source media="(min-width: 768px)" srcSet="/assets/images/logo__pf--reverse-on-md.svg" />
            <source srcSet="/assets/images/logo__pf--reverse--base.svg" />
          </Brand>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const pageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
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

  const sidebar = <PageSidebar nav={pageNav} />;

  const mainContainerId = 'main-content-page-layout-tertiary-nav';

  const pageSkipToContent = <SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>;

  return (
    <Page
      header={masthead}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
      breadcrumb={dashboardBreadcrumb}
      mainContainerId={mainContainerId}
      isTertiaryNavWidthLimited
      isBreadcrumbWidthLimited
      isTertiaryNavGrouped
      isBreadcrumbGrouped
      additionalGroupedContent={
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">
              Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
              of its relative line height of 1.5.
            </Text>
          </TextContent>
        </PageSection>
      }
      groupProps={{
        stickyOnBreakpoint: { default: 'top' }
      }}
    >
      <PageSection>
        <Gallery hasGutter>
          {Array.apply(0, Array(50)).map((x, i) => (
            <GalleryItem key={i}>
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
