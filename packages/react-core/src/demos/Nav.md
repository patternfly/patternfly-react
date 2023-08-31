---
id: Navigation
section: components
---

import { DashboardBreadcrumb } from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';

## Demos

### Default nav

```js isFullscreen
import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

class PageLayoutDefaultNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="#">
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="#">
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="#">
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="#">
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="#">
            Server
          </NavItem>
        </NavList>
      </Nav>
    );

    const Sidebar = (
      <PageSidebar>
        <PageSidebarBody>{PageNav}</PageSidebarBody>
      </PageSidebar>
    );
    const pageId = 'main-content-page-layout-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    return (
      <React.Fragment>
        <Page
          header={<DashboardHeader />}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          breadcrumb={DashboardBreadcrumb}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of its relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery hasGutter>
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
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
  }
}
```

### Grouped nav

```js isFullscreen
import React from 'react';
import {
  Nav,
  NavGroup,
  NavItem,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

class PageLayoutGroupsNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'grp-1_itm-1'
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavGroup title="System Panel">
          <NavItem itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'} to="#">
            Overview
          </NavItem>
          <NavItem itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'} to="#">
            Resource Usage
          </NavItem>
          <NavItem itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'} to="#">
            Hypervisors
          </NavItem>
          <NavItem itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'} to="#">
            Instances
          </NavItem>
          <NavItem itemId="grp-1_itm-5" isActive={activeItem === 'grp-1_itm-5'} to="#">
            Volumes
          </NavItem>
          <NavItem itemId="grp-1_itm-6" isActive={activeItem === 'grp-1_itm-6'} to="#">
            Network
          </NavItem>
        </NavGroup>
        <NavGroup title="Policy">
          <NavItem itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'} to="#">
            Hosts
          </NavItem>
          <NavItem itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'} to="#">
            Virtual Machines
          </NavItem>
          <NavItem itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'} to="#">
            Storage
          </NavItem>
        </NavGroup>
      </Nav>
    );

    const Sidebar = (
      <PageSidebar>
        <PageSidebarBody>{PageNav}</PageSidebarBody>
      </PageSidebar>
    );
    const pageId = 'main-content-page-layout-group-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

    return (
      <React.Fragment>
        <Page
          header={<DashboardHeader />}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of its relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection variant={PageSectionVariants.light}>Light</PageSection>
          <PageSection variant={PageSectionVariants.dark}>Dark</PageSection>
          <PageSection variant={PageSectionVariants.darker}>Darker</PageSection>
          <PageSection>Content</PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
```

### Expandable nav

```js isFullscreen
import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

class PageLayoutExpandableNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGroup: 'grp-1',
      activeItem: 'grp-1_itm-1'
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId,
        activeGroup: result.groupId
      });
    };
  }

  render() {
    const { activeItem, activeGroup } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavExpandable title="System Panel" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem groupId="grp-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'} to="#">
              Overview
            </NavItem>
            <NavItem groupId="grp-1" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'} to="#">
              Resource usage
            </NavItem>
            <NavItem groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'} to="#">
              Hypervisors
            </NavItem>
            <NavItem groupId="grp-1" itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'} to="#">
              Instances
            </NavItem>
            <NavItem groupId="grp-1" itemId="grp-1_itm-5" isActive={activeItem === 'grp-1_itm-5'} to="#">
              Volumes
            </NavItem>
            <NavItem groupId="grp-1" itemId="grp-1_itm-6" isActive={activeItem === 'grp-1_itm-6'} to="#">
              Network
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Policy" groupId="grp-2" isActive={activeGroup === 'grp-2'} to="#">
            <NavItem groupId="grp-2" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'} to="#">
              Subnav link 1
            </NavItem>
            <NavItem groupId="grp-2" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'} to="#">
              Subnav link 2
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Authentication" groupId="grp-3" isActive={activeGroup === 'grp-3'}>
            <NavItem groupId="grp-3" itemId="grp-3_itm-1" isActive={activeItem === 'grp-3_itm-1'} to="#">
              Subnav link 1
            </NavItem>
            <NavItem groupId="grp-3" itemId="grp-3_itm-2" isActive={activeItem === 'grp-3_itm-2'} to="#">
              Subnav link 2
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );

    const Sidebar = (
      <PageSidebar>
        <PageSidebarBody>{PageNav}</PageSidebarBody>
      </PageSidebar>
    );
    const pageId = 'main-content-page-layout-expandable-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    return (
      <React.Fragment>
        <Page
          header={<DashboardHeader />}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          breadcrumb={DashboardBreadcrumb}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of its relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery hasGutter>
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
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
  }
}
```

### Horizontal nav

```js isFullscreen
import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownList,
  Gallery,
  GalleryItem,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  MenuToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';

class PageLayoutHorizontalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isFullKebabDropdownOpen: false,
      activeItem: 0
    };

    this.onDropdownToggle = () => {
      this.setState((prevState) => ({
        isDropdownOpen: !prevState.isDropdownOpen
      }));
    };

    this.onDropdownSelect = () => {
      this.setState({
        isDropdownOpen: false
      });
    };

    this.onKebabDropdownToggle = () => {
      this.setState((prevState) => ({
        isKebabDropdownOpen: !prevState.isKebabDropdownOpen
      }));
    };

    this.onKebabDropdownSelect = () => {
      this.setState({
        isKebabDropdownOpen: false
      });
    };

    this.onFullKebabToggle = () => {
      this.setState((prevState) => ({
        isFullKebabDropdownOpen: !prevState.isFullKebabDropdownOpen
      }));
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, isFullKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav" variant="horizontal">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="#">
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="#">
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="#">
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="#">
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="#">
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
                onSelect={this.onKebabDropdownSelect}
                onOpenChange={(isOpen) => this.setState({ isKebabDropdownOpen: isOpen })}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isKebabDropdownOpen}
                    onClick={this.onKebabDropdownToggle}
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
                onSelect={this.onFullKebabSelect}
                onOpenChange={(isOpen) => this.setState({ isFullKebabDropdownOpen: isOpen })}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isFullKebabDropdownOpen}
                    onClick={this.onFullKebabToggle}
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
              onSelect={this.onDropdownSelect}
              onOpenChange={(isOpen) => this.setState({ isDropdownOpen: isOpen })}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isDropdownOpen}
                  onClick={this.onDropdownToggle}
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
        <Page
          header={Header}
          skipToContent={PageSkipToContent}
          breadcrumb={DashboardBreadcrumb}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of its relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery hasGutter>
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
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
  }
}
```

### Horizontal subnav

```js isFullscreen
import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

class VerticalNavWithSubnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0,
      activeSubNavItem: 7
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };

    this.onSubNavSelect = (_event, result) => {
      this.setState({
        activeSubNavItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem, activeSubNavItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="#">
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="#">
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="#">
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="#">
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="#">
            Server
          </NavItem>
        </NavList>
      </Nav>
    );

    const Sidebar = (
      <PageSidebar>
        <PageSidebarBody>{PageNav}</PageSidebarBody>
      </PageSidebar>
    );
    const pageId = 'main-content-page-layout-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    const SubNav = (
      <Nav onSelect={this.onSubNavSelect} aria-label="Nav" variant="horizontal-subnav">
        <NavList>
          <NavItem itemId={7} isActive={activeSubNavItem === 7} to="#">
            Horizontal subnav item 1
          </NavItem>
          <NavItem itemId={8} isActive={activeSubNavItem === 8} to="#">
            Horizontal subnav item 2
          </NavItem>
          <NavItem itemId={9} isActive={activeSubNavItem === 9} to="#">
            Horizontal subnav item 3
          </NavItem>
          <NavItem itemId={10} isActive={activeSubNavItem === 10} to="#">
            Horizontal subnav item 4
          </NavItem>
          <NavItem itemId={11} isActive={activeSubNavItem === 11} to="#">
            Horizontal subnav item 5
          </NavItem>
          <NavItem itemId={12} isActive={activeSubNavItem === 12} to="#">
            Horizontal subnav item 6
          </NavItem>
          <NavItem itemId={13} isActive={activeSubNavItem === 13} to="#">
            Horizontal subnav item 7
          </NavItem>
        </NavList>
      </Nav>
    );

    return (
      <React.Fragment>
        <Page
          header={<DashboardHeader />}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
        >
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
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
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
  }
}
```

### Horizontal nav with horizontal subnav

```js isFullscreen
import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownList,
  Gallery,
  GalleryItem,
  MenuToggle,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSectionTypes,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarContent,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';

class HorizontalNavWithSubnav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isFullKebabDropdownOpen: false,
      activeItem: 0,
      activeSubNavItem: 7
    };

    this.onDropdownToggle = () => {
      this.setState((prevState) => ({
        isDropdownOpen: !prevState.isDropdownOpen
      }));
    };

    this.onDropdownSelect = () => {
      this.setState({
        isDropdownOpen: false
      });
    };

    this.onKebabDropdownToggle = () => {
      this.setState((prevState) => ({
        isKebabDropdownOpen: !prevState.isKebabDropdownOpen
      }));
    };

    this.onKebabDropdownSelect = () => {
      this.setState({
        isKebabDropdownOpen: false
      });
    };

    this.onFullKebabToggle = () => {
      this.setState((prevState) => ({
        isFullKebabDropdownOpen: !prevState.isFullKebabDropdownOpen
      }));
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };

    this.onSubNavSelect = (_event, result) => {
      this.setState({
        activeSubNavItem: result.itemId
      });
    };
  }

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, isFullKebabDropdownOpen, activeItem, activeSubNavItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav" variant="horizontal">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="#">
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="#">
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="#">
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="#">
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="#">
            Server
          </NavItem>
          <NavItem itemId={5} isActive={activeItem === 5} to="#">
            Other horizontal nav item 1
          </NavItem>
          <NavItem itemId={6} isActive={activeItem === 6} to="#">
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
      <Nav onSelect={this.onSubNavSelect} aria-label="Nav" variant="horizontal-subnav">
        <NavList>
          <NavItem itemId={7} isActive={activeSubNavItem === 7} to="#">
            Horizontal subnav item 1
          </NavItem>
          <NavItem itemId={8} isActive={activeSubNavItem === 8} to="#">
            Horizontal subnav item 2
          </NavItem>
          <NavItem itemId={9} isActive={activeSubNavItem === 9} to="#">
            Horizontal subnav item 3
          </NavItem>
          <NavItem itemId={10} isActive={activeSubNavItem === 10} to="#">
            Horizontal subnav item 4
          </NavItem>
          <NavItem itemId={11} isActive={activeSubNavItem === 11} to="#">
            Horizontal subnav item 5
          </NavItem>
          <NavItem itemId={12} isActive={activeSubNavItem === 12} to="#">
            Horizontal subnav item 6
          </NavItem>
          <NavItem itemId={13} isActive={activeSubNavItem === 13} to="#">
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
                onSelect={this.onKebabDropdownSelect}
                onOpenChange={(isOpen) => this.setState({ isKebabDropdownOpen: isOpen })}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isKebabDropdownOpen}
                    onClick={this.onKebabDropdownToggle}
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
                onSelect={this.onFullKebabSelect}
                onOpenChange={(isOpen) => this.setState({ isFullKebabDropdownOpen: isOpen })}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isFullKebabDropdownOpen}
                    onClick={this.onFullKebabToggle}
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
              onSelect={this.onDropdownSelect}
              onOpenChange={(isOpen) => this.setState({ isDropdownOpen: isOpen })}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isDropdownOpen}
                  onClick={this.onDropdownToggle}
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
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
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
  }
}
```

### Tertiary nav (deprecated)

```js isFullscreen
import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import { DashboardBreadcrumb } from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

class PageLayoutTertiaryNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;

    const PageNav = (
      <Nav variant="tertiary" onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="#">
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="#">
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="#">
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="#">
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="#">
            Server
          </NavItem>
        </NavList>
      </Nav>
    );

    const pageId = 'main-content-page-layout-tertiary-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    return (
      <React.Fragment>
        <Page
          header={<DashboardHeader />}
          breadcrumb={DashboardBreadcrumb}
          tertiaryNav={PageNav}
          isManagedSidebar
          isTertiaryNavWidthLimited
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of its relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery hasGutter>
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
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
  }
}
```

### Light nav (deprecated)

```js isFullscreen
import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  TextContent,
  Text
} from '@patternfly/react-core';
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

class PageLayoutLightNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }

  render() {
    const { activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav" theme="light">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="#">
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="#">
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="#">
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="#">
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="#">
            Server
          </NavItem>
        </NavList>
      </Nav>
    );

    const Sidebar = (
      <PageSidebar theme="light">
        <PageSidebarBody>{PageNav}</PageSidebarBody>
      </PageSidebar>
    );
    const pageId = 'main-content-page-layout-simple-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

    return (
      <React.Fragment>
        <Page
          header={<DashboardHeader />}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of its relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery hasGutter>
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
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
  }
}
```

### Manual nav

```js isFullscreen
import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Dropdown,
  DropdownItem,
  DropdownList,
  Gallery,
  GalleryItem,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  MenuToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  PageSidebarBody,
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
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import imgAvatar from '@patternfly/react-core/src/components/assets/avatarImg.svg';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';

class PageLayoutManualNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      isFullKebabDropdownOpen: false,
      activeItem: 0,
      isMobileView: false,
      isNavOpenDesktop: true,
      isNavOpenMobile: false
    };

    this.onDropdownToggle = () => {
      this.setState((prevState) => ({
        isDropdownOpen: !prevState.isDropdownOpen
      }));
    };

    this.onDropdownSelect = () => {
      this.setState({
        isDropdownOpen: false
      });
    };

    this.onKebabDropdownToggle = () => {
      this.setState((prevState) => ({
        isKebabDropdownOpen: !prevState.isKebabDropdownOpen
      }));
    };

    this.onKebabDropdownSelect = () => {
      this.setState({
        isKebabDropdownOpen: false
      });
    };

    this.onFullKebabToggle = () => {
      this.setState((prevState) => ({
        isFullKebabDropdownOpen: !prevState.isFullKebabDropdownOpen
      }));
    };

    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };

    this.onNavToggleDesktop = () => {
      this.setState({
        isNavOpenDesktop: !this.state.isNavOpenDesktop
      });
    };

    this.onNavToggleMobile = () => {
      this.setState({
        isNavOpenMobile: !this.state.isNavOpenMobile
      });
    };

    this.onPageResize = (_event, { mobileView, windowSize }) => {
      this.setState({
        isMobileView: mobileView
      });
    };
  }

  render() {
    const {
      isDropdownOpen,
      isKebabDropdownOpen,
      isFullKebabDropdownOpen,
      activeItem,
      isNavOpenDesktop,
      isNavOpenMobile,
      isMobileView
    } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem itemId={0} isActive={activeItem === 0} to="#">
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1} to="#">
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2} to="#">
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3} to="#">
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4} to="#">
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
      <Toolbar id="toolbar" isFullHeight isStatic>
        <ToolbarContent>
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
                onSelect={this.onKebabDropdownSelect}
                onOpenChange={(isOpen) => this.setState({ isKebabDropdownOpen: isOpen })}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isKebabDropdownOpen}
                    onClick={this.onKebabDropdownToggle}
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
                onSelect={this.onFullKebabSelect}
                onOpenChange={(isOpen) => this.setState({ isFullKebabDropdownOpen: isOpen })}
                popperProps={{ position: 'right' }}
                toggle={(toggleRef) => (
                  <MenuToggle
                    ref={toggleRef}
                    isExpanded={isFullKebabDropdownOpen}
                    onClick={this.onFullKebabToggle}
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
              onSelect={this.onDropdownSelect}
              onOpenChange={(isOpen) => this.setState({ isDropdownOpen: isOpen })}
              popperProps={{ position: 'right' }}
              toggle={(toggleRef) => (
                <MenuToggle
                  ref={toggleRef}
                  isExpanded={isDropdownOpen}
                  onClick={this.onDropdownToggle}
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

    const Sidebar = (
      <PageSidebar isSidebarOpen={isMobileView ? isNavOpenMobile : isNavOpenDesktop}>
        <PageSidebarBody>{PageNav}</PageSidebarBody>
      </PageSidebar>
    );
    const pageId = 'main-content-page-layout-manual-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to Content</SkipToContent>;

    return (
      <React.Fragment>
        <Page
          header={Header}
          sidebar={Sidebar}
          onPageResize={this.onPageResize}
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of its relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery hasGutter>
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
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
  }
}
```

### Flyout nav

```js isFullscreen
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
import DashboardHeader from '@patternfly/react-core/src/demos/examples/DashboardHeader';

class VerticalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: true,
      activeItem: 0
    };
    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
    this.onMenuSelect = (event, itemId) => {
      this.setState({
        activeItem: itemId
      });
    };
  }

  render() {
    const numFlyouts = 5;
    const FlyoutMenu = ({ depth, children }) => (
      <Menu key={depth} containsFlyout isNavFlyout id={`menu-${depth}`} onSelect={this.onMenuSelect}>
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
    let curFlyout = <FlyoutMenu depth={1} />;
    for (let i = 2; i < numFlyouts - 1; i++) {
      curFlyout = <FlyoutMenu depth={i}>{curFlyout}</FlyoutMenu>;
    }

    const { activeItem } = this.state;

    const Sidebar = (
      <PageSidebar style={{ overflow: 'visible' }}>
        <PageSidebarBody>
          <Nav onSelect={this.onNavSelect}>
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
  }
}
```

### Drilldown nav

```js isBeta isFullscreen file="./examples/Nav/NavDrilldown.tsx"

```
