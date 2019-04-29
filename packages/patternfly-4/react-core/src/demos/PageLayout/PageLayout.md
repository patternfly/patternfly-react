---
title: 'Page layout'
section: 'demos'
---

import LinkPreview from '@content/../LinkPreview';

All but the last example set the isManagedSidebar prop on the Page component to have the sidebar automatically close for smaller screen widths. You can also manually control this behavior by not adding the isManagedSidebar prop and instead:

- Add an onNavToggle callback to PageHeader
- Pass in a boolean into the isNavOpen prop to PageSidebar

The last example demonstrates this.

## Using simple navigation

<LinkPreview name="Simple Nav" path="/documentation/react/demos/pagelayout/pagelayoutsimplenav" />

```nolive
import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

class PageLayoutSimpleNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList variant={NavVariants.simple}>
          <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem to="#nav-link3" itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem to="#nav-link4" itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem to="#nav-link5" itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="simple-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="simple-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} />;
    const PageSkipToContent = (
      <SkipToContent href="#main-content-page-layout-default-nav">Skip to Content</SkipToContent>
    );

    return (
      <React.Fragment>
        <Page header={Header} sidebar={Sidebar} isManagedSidebar skipToContent={PageSkipToContent}>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
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

## Using default navigation

<LinkPreview name="Default Nav" path="/documentation/react/demos/pagelayout/pagelayoutdefaultnav" />

```nolive
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
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

class PageLayoutDefaultNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem to="#nav-link3" itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem to="#nav-link4" itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem to="#nav-link5" itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="default-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="default-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} />;
    const PageSkipToContent = (
      <SkipToContent href="#main-content-page-layout-default-nav"> Skip to Content</SkipToContent>
    );

    const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    return (
      <React.Fragment>
        <Page
          header={Header}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          breadcrumb={PageBreadcrumb}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
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

## Using expandable navigation

<LinkPreview name="Expandable Nav" path="/documentation/react/demos/pagelayout/pagelayoutexpandablenav" />

```nolive
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
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

class PageLayoutExpandableNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeGroup: 'grp-1',
      activeItem: 'grp-1_itm-1'
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId,
      activeGroup: result.groupId
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem, activeGroup } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavExpandable title="System Panel" groupId="grp-1" isActive={activeGroup === 'grp-1'} isExpanded>
            <NavItem to="#expandable-1" groupId="grp-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
              Overview
            </NavItem>
            <NavItem to="#expandable-2" groupId="grp-1" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
              Resource Usage
            </NavItem>
            <NavItem to="#expandable-3" groupId="grp-1" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
              Hypervisors
            </NavItem>
            <NavItem to="#expandable-4" groupId="grp-1" itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'}>
              Instances
            </NavItem>
            <NavItem to="#expandable-5" groupId="grp-1" itemId="grp-1_itm-5" isActive={activeItem === 'grp-1_itm-5'}>
              Volumes
            </NavItem>
            <NavItem to="#expandable-6" groupId="grp-1" itemId="grp-1_itm-6" isActive={activeItem === 'grp-1_itm-6'}>
              Network
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Policy" groupId="grp-2" isActive={activeGroup === 'grp-2'}>
            <NavItem to="#expandable-4" groupId="grp-2" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
              Subnav Link 1
            </NavItem>
            <NavItem to="#expandable-5" groupId="grp-2" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
              Subnav Link 2
            </NavItem>
          </NavExpandable>
          <NavExpandable title="Authentication" groupId="grp-3" isActive={activeGroup === 'grp-3'}>
            <NavItem to="#expandable-7" groupId="grp-3" itemId="grp-3_itm-1" isActive={activeItem === 'grp-3_itm-1'}>
              Subnav Link 1
            </NavItem>
            <NavItem to="#expandable-8" groupId="grp-3" itemId="grp-3_itm-2" isActive={activeItem === 'grp-3_itm-2'}>
              Subnav Link 2
            </NavItem>
          </NavExpandable>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="expanded-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="expanded-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} />;
    const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );
    const PageSkipToContent = (
      <SkipToContent href="#main-content-page-layout-expandable-nav">Skip to Content</SkipToContent>
    );

    return (
      <React.Fragment>
        <Page
          header={Header}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          breadcrumb={PageBreadcrumb}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
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

## Using grouped navigation

<LinkPreview name="Grouped Nav" path="/documentation/react/demos/pagelayout/pagelayoutgroupsnav" />

```nolive
import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  KebabToggle,
  Nav,
  NavGroup,
  NavItem,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

class PageLayoutGroupsNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 'grp-1_itm-1'
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavGroup title="System Panel">
          <NavItem to="#grouped-1" itemId="grp-1_itm-1" isActive={activeItem === 'grp-1_itm-1'}>
            Overview
          </NavItem>
          <NavItem to="#grouped-2" itemId="grp-1_itm-2" isActive={activeItem === 'grp-1_itm-2'}>
            Resource Usage
          </NavItem>
          <NavItem to="#grouped-3" itemId="grp-1_itm-3" isActive={activeItem === 'grp-1_itm-3'}>
            Hypervisors
          </NavItem>
          <NavItem to="#grouped-4" itemId="grp-1_itm-4" isActive={activeItem === 'grp-1_itm-4'}>
            Instances
          </NavItem>
          <NavItem to="#grouped-5" itemId="grp-1_itm-5" isActive={activeItem === 'grp-1_itm-5'}>
            Volumes
          </NavItem>
          <NavItem to="#grouped-6" itemId="grp-1_itm-6" isActive={activeItem === 'grp-1_itm-6'}>
            Network
          </NavItem>
        </NavGroup>
        <NavGroup title="Policy">
          <NavItem to="#grouped-7" itemId="grp-2_itm-1" isActive={activeItem === 'grp-2_itm-1'}>
            Hosts
          </NavItem>
          <NavItem to="#grouped-8" itemId="grp-2_itm-2" isActive={activeItem === 'grp-2_itm-2'}>
            Virtual Machines
          </NavItem>
          <NavItem to="#grouped-9" itemId="grp-2_itm-3" isActive={activeItem === 'grp-2_itm-3'}>
            Storage
          </NavItem>
        </NavGroup>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="groups-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="groups-example-uid-02" aria-label="Setings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        showNavToggle
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} />;
    const PageSkipToContent = <SkipToContent href="#main-content-page-layout-group-nav">Skip to Content</SkipToContent>;

    return (
      <React.Fragment>
        <Page header={Header} sidebar={Sidebar} isManagedSidebar skipToContent={PageSkipToContent}>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
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

## Using horizontal navigation

<LinkPreview name="Horizontal Nav" path="/documentation/react/demos/pagelayout/pagelayouthorizontalnav" />

```nolive
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
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  NavVariants,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

class PageLayoutHorizontalNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList variant={NavVariants.horizontal}>
          <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem to="#nav-link3" itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem to="#nav-link4" itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem to="#nav-link5" itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="horizontal-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="horizontal-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        topNav={PageNav}
      />
    );

    const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section Home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section Landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const PageSkipToContent = (
      <SkipToContent href="#main-content-page-layout-default-nav">Skip to Content</SkipToContent>
    );

    return (
      <React.Fragment>
        <Page header={Header} skipToContent={PageSkipToContent} breadcrumb={PageBreadcrumb}>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
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

## Programmatically toggle the sidebar

<LinkPreview name="Manual Nav" path="/documentation/react/demos/pagelayout/pagelayoutmanualnav" />

```nolive
import React from 'react';
import {
  Avatar,
  Brand,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  SkipToContent,
  TextContent,
  Text,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
import imgBrand from './imgBrand.png';
import imgAvatar from './imgAvatar.svg';

class PageLayoutManualNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      isMobileView: false,
      isNavOpenDesktop: true,
      isNavOpenMobile: false
    };
  }

  onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  onDropdownSelect = event => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  onNavToggleDesktop = () => {
    this.setState({
      isNavOpenDesktop: !this.state.isNavOpenDesktop
    });
  };

  onNavToggleMobile = () => {
    this.setState({
      isNavOpenMobile: !this.state.isNavOpenMobile
    });
  };

  onPageResize = ({ mobileView, windowSize }) => {
    this.setState({
      isMobileView: mobileView
    });
  };

  render() {
    const {
      isDropdownOpen,
      isKebabDropdownOpen,
      activeItem,
      isNavOpenDesktop,
      isNavOpenMobile,
      isMobileView
    } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem to="#nav-link3" itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem to="#nav-link4" itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem to="#nav-link5" itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem component="button">Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled component="button">
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem component="button">Separated Action</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnLg)}>
          <ToolbarItem>
            <Button id="default-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="default-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarItem className={css(accessibleStyles.hiddenOnLg, spacingStyles.mr_0)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem>
          <ToolbarItem className={css(accessibleStyles.screenReader, accessibleStyles.visibleOnMd)}>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Kyle Baker</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );

    const Header = (
      <PageHeader
        logo={<Brand src={imgBrand} alt="Patternfly Logo" />}
        toolbar={PageToolbar}
        avatar={<Avatar src={imgAvatar} alt="Avatar image" />}
        showNavToggle
        onNavToggle={isMobileView ? this.onNavToggleMobile : this.onNavToggleDesktop}
        isNavOpen={isMobileView ? isNavOpenMobile : isNavOpenDesktop}
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} isNavOpen={isMobileView ? isNavOpenMobile : isNavOpenDesktop} />;
    const PageSkipToContent = (
      <SkipToContent href="#main-content-page-layout-default-nav">Skip to Content</SkipToContent>
    );

    return (
      <React.Fragment>
        <Page header={Header} sidebar={Sidebar} onPageResize={this.onPageResize} skipToContent={PageSkipToContent}>
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main Title</Text>
              <Text component="p">
                Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                of it’s relative line height of 1.5.
              </Text>
            </TextContent>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
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
