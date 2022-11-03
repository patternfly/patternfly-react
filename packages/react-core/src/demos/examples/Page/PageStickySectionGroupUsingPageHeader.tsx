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
  Divider,
  Dropdown,
  DropdownGroup,
  DropdownItem,
  DropdownToggle,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  Text,
  TextContent
} from '@patternfly/react-core';
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

export const PageStickySectionGroupUsingPageHeader: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
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

  const onFullKebabDropdownToggle = (isOpen: boolean) => {
    setIsFullKebabDropdownOpen(isOpen);
  };

  const onFullKebabDropdownSelect = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
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

  const fullKebabDropdownItems = [
    <DropdownGroup key="group 2">
      <DropdownItem key="group 2 profile">My profile</DropdownItem>
      <DropdownItem key="group 2 user" component="button">
        User management
      </DropdownItem>
      <DropdownItem key="group 2 logout">Logout</DropdownItem>
    </DropdownGroup>,
    <Divider key="divider" />,
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

  const sidebar = <PageSidebar nav={pageNav} />;

  const mainContainerId = 'main-content';

  const pageSkipToContent = <SkipToContent href={`#${mainContainerId}`}>Skip to content</SkipToContent>;

  const headerTools = (
    <PageHeaderTools>
      <PageHeaderToolsGroup>
        <PageHeaderToolsItem>
          <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
        </PageHeaderToolsItem>
        <PageHeaderToolsGroup visibility={{ default: 'hidden', lg: 'visible' }}>
          <PageHeaderToolsItem visibility={{ default: 'hidden', md: 'hidden', lg: 'visible' }}>
            <ApplicationLauncher
              onSelect={onAppLauncherSelect}
              onToggle={onAppLauncherToggle}
              isOpen={isAppLauncherOpen}
              items={appLauncherItems}
            />
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <Button aria-label="Settings" variant={ButtonVariant.plain} icon={<CogIcon />} />
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <Button aria-label="Help" variant={ButtonVariant.plain} icon={<QuestionCircleIcon />} />
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
        <PageHeaderToolsItem visibility={{ default: 'hidden', md: 'visible', lg: 'hidden' }}>
          <Dropdown
            isPlain
            position="right"
            onSelect={onKebabDropdownSelect}
            toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
            isOpen={isKebabDropdownOpen}
            dropdownItems={kebabDropdownItems}
          />
        </PageHeaderToolsItem>
        <PageHeaderToolsItem visibility={{ md: 'hidden' }}>
          <Dropdown
            isPlain
            position="right"
            onSelect={onFullKebabDropdownSelect}
            toggle={<KebabToggle onToggle={onFullKebabDropdownToggle} />}
            isOpen={isFullKebabDropdownOpen}
            dropdownItems={fullKebabDropdownItems}
          />
        </PageHeaderToolsItem>
      </PageHeaderToolsGroup>
      <PageHeaderToolsItem
        visibility={{ default: 'hidden', md: 'visible' }} /** this user dropdown is hidden on mobile sizes */
      >
        <Avatar src={imgAvatar} alt="Avatar" />
      </PageHeaderToolsItem>
      <PageHeaderToolsItem
        visibility={{ default: 'hidden', md: 'visible' }} /** this user dropdown is hidden on mobile sizes */
      >
        <Dropdown
          isPlain
          position="right"
          onSelect={onDropdownSelect}
          isOpen={isDropdownOpen}
          toggle={<DropdownToggle onToggle={onDropdownToggle}>Ned Username</DropdownToggle>}
          dropdownItems={userDropdownItems}
        />
      </PageHeaderToolsItem>
    </PageHeaderTools>
  );

  const pageHeader = (
    <PageHeader
      logo={
        <Brand
          widths={{ default: '180px', md: '180px', '2xl': '220px' }}
          src="/assets/images/logo__pf--reverse--base.png"
          alt="Fallback patternFly default logo"
        >
          <source media="(min-width: 768px)" srcSet="/assets/images/logo__pf--reverse-on-md.svg" />
          <source srcSet="/assets/images/logo__pf--reverse--base.svg" />
        </Brand>
      }
      headerTools={headerTools}
      showNavToggle
    />
  );

  return (
    <Page
      header={pageHeader}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
      breadcrumb={dashboardBreadcrumb}
      mainContainerId={mainContainerId}
      isBreadcrumbWidthLimited
      isBreadcrumbGrouped
      additionalGroupedContent={
        <PageSection variant={PageSectionVariants.light} isWidthLimited>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">This is a full page demo.</Text>
          </TextContent>
        </PageSection>
      }
      groupProps={{
        stickyOnBreakpoint: {
          default: 'top'
        }
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
