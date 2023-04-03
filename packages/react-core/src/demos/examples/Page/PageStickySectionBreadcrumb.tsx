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
  Gallery,
  GalleryItem,
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
  ToolbarItem,
} from '@patternfly/react-core';
import {
  Dropdown as DropdownDeprecated,
  DropdownGroup as DropdownGroupDeprecated,
  DropdownItem as DropdownItemDeprecated,
  DropdownToggle,
  KebabToggle
} from '@patternfly/react-core/deprecated';
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

export const PageStickySectionBreadcrumb: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isKebabDropdownOpen, setIsKebabDropdownOpen] = React.useState(false);
  const [isFullKebabDropdownOpen, setIsFullKebabDropdownOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(1);

  const onNavSelect = (selectedItem: NavOnSelectProps) => {
    typeof selectedItem.itemId === 'number' && setActiveItem(selectedItem.itemId);
  };

  const onDropdownToggle = (_event: any, isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  const onDropdownSelect = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onKebabDropdownToggle = (_event: any, isOpen: boolean) => {
    setIsKebabDropdownOpen(isOpen);
  };

  const onKebabDropdownSelect = () => {
    setIsKebabDropdownOpen(!isKebabDropdownOpen);
  };

  const onFullKebabDropdownToggle = (_event: any, isOpen: boolean) => {
    setIsFullKebabDropdownOpen(isOpen);
  };

  const onFullKebabDropdownSelect = () => {
    setIsFullKebabDropdownOpen(!isFullKebabDropdownOpen);
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
    <DropdownItemDeprecated key="settings">
      <CogIcon /> Settings
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="help">
      <HelpIcon /> Help
    </DropdownItemDeprecated>
  ];

  const fullKebabDropdownItems = [
    <DropdownGroupDeprecated key="group 2">
      <DropdownItemDeprecated key="group 2 profile">My profile</DropdownItemDeprecated>
      <DropdownItemDeprecated key="group 2 user" component="button">
        User management
      </DropdownItemDeprecated>
      <DropdownItemDeprecated key="group 2 logout">Logout</DropdownItemDeprecated>
    </DropdownGroupDeprecated>,
    <Divider key="divider" />,
    <DropdownItemDeprecated key="settings">
      <CogIcon /> Settings
    </DropdownItemDeprecated>,
    <DropdownItemDeprecated key="help">
      <HelpIcon /> Help
    </DropdownItemDeprecated>
  ];

  const userDropdownItems = [
    <DropdownGroupDeprecated key="group 2">
      <DropdownItemDeprecated key="group 2 profile">My profile</DropdownItemDeprecated>
      <DropdownItemDeprecated key="group 2 user" component="button">
        User management
      </DropdownItemDeprecated>
      <DropdownItemDeprecated key="group 2 logout">Logout</DropdownItemDeprecated>
    </DropdownGroupDeprecated>
  ];

  const headerToolbar = (
    <Toolbar id="toolbar" isFullHeight isStatic>
      <ToolbarContent>
        <ToolbarGroup
          variant="icon-button-group"
          align={{ default: 'alignRight' }}
          spacer={{ default: 'spacerNone', md: 'spacerMd' }}
        >
          <ToolbarItem>
            <Button aria-label="Notifications" variant={ButtonVariant.plain} icon={<BellIcon />} />
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
            <DropdownDeprecated
              isPlain
              position="right"
              onSelect={onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem visibility={{ md: 'hidden' }}>
            <DropdownDeprecated
              isPlain
              position="right"
              onSelect={onFullKebabDropdownSelect}
              toggle={<KebabToggle onToggle={onFullKebabDropdownToggle} />}
              isOpen={isFullKebabDropdownOpen}
              dropdownItems={fullKebabDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarItem visibility={{ default: 'hidden', md: 'visible' }}>
          <DropdownDeprecated
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

  return (
    <Page
      header={masthead}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
      breadcrumb={dashboardBreadcrumb}
      mainContainerId={mainContainerId}
      isBreadcrumbWidthLimited
      breadcrumbProps={{
        stickyOnBreakpoint: {
          md: 'top'
        }
      }}
    >
      <PageSection variant={PageSectionVariants.light} isWidthLimited>
        <TextContent>
          <Text component="h1">Main title</Text>
          <Text component="p">This is a full page demo.</Text>
        </TextContent>
      </PageSection>
      <PageSection isWidthLimited>
        <Gallery hasGutter>
          {Array.apply(0, Array(50)).map((_x, i) => (
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
