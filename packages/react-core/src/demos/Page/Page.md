---
id: Page
section: components
---

import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgBrand from '@patternfly/react-core/src/demos/examples/pfColorLogo.svg';
import imgAvatar from '@patternfly/react-core/src/components/Avatar/examples/avatarImg.svg';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import LightbulbIcon from '@patternfly/react-icons/dist/esm/icons/lightbulb-icon';
import DashboardWrapper from '../examples/DashboardWrapper';


- All examples set the `isManagedSidebar` prop on the Page component to have the sidebar automatically close for smaller screen widths. You can also manually control this behavior by not adding the `isManagedSidebar` prop and instead:

  1. Add an onNavToggle callback to PageHeader
  2. Pass a boolean into the isNavOpen prop to PageSidebar

- To make the page take up the full height, it is recommended to set the height of all ancestor elements up to the page component to `100%`

## Layouts

This demonstrates a variety of navigation patterns in the context of a full page layout. These can be used as a basis for choosing the most appropriate page template for your application.

### Sticky section group

```js isFullscreen
import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
} from '@patternfly/react-core';
import DashboardWrapper from '../examples/DashboardWrapper';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import AttentionBellIcon from '@patternfly/react-icons/dist/esm/icons/attention-bell-icon';
import LightbulbIcon from '@patternfly/react-icons/dist/esm/icons/lightbulb-icon';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import imgBrand from './imgBrand.svg';
import imgAvatar from './imgAvatar.svg';

class PageLayoutGrouped extends React.Component {

  render() {
    const pageId = 'main-content-page-layout-tertiary-nav';

    return (
      <DashboardWrapper
        isTertiaryNavWidthLimited
        isBreadcrumbWidthLimited
        mainContainerId={pageId}
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
          </PageSection>}
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
      </DashboardWrapper>
    );
  }
}
```

### Sticky section group (alternate syntax)

```js isFullscreen
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  PageGroup,
  PageBreadcrumb,
  TextContent,
  Text
} from '@patternfly/react-core';
import DashboardWrapper from '../examples/DashboardWrapper';

class PageLayoutGroupedAlt extends React.Component {

  render() {
    const pageId = 'main-content-page-layout-tertiary-nav';

    return (
      <React.Fragment>
        <DashboardWrapper hasNoBreadcrumb mainContainerId={pageId}>
          <PageGroup stickyOnBreakpoint={{ default: 'top' }}>
            <PageBreadcrumb>
              <Breadcrumb>
                <BreadcrumbItem>Section home</BreadcrumbItem>
                <BreadcrumbItem to="#">Section title</BreadcrumbItem>
                <BreadcrumbItem to="#">Section title</BreadcrumbItem>
                <BreadcrumbItem to="#" isActive>
                  Section landing
                </BreadcrumbItem>
              </Breadcrumb>
            </PageBreadcrumb>
            <PageSection variant={PageSectionVariants.light}>
              <TextContent>
                <Text component="h1">Main title</Text>
                <Text component="p">
                  Body text should be Overpass Regular at 16px. It should have leading of 24px because <br />
                  of its relative line height of 1.5.
                </Text>
              </TextContent>
            </PageSection>{' '}
          </PageGroup>
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
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
```

### Sticky section group (using PageHeader)

This demo is provided becuase PageHeader and PageHeaderTools are still in use; however, going forward Masthead and Toolbar should be used to make headers rather than PageHeader and PageHeaderTools.

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
  DropdownGroup,
  DropdownToggle,
  DropdownItem,
  Gallery,
  GalleryItem,
  KebabToggle,
  PageHeader,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
  PageHeaderTools,
  PageHeaderToolsGroup,
  PageHeaderToolsItem
} from '@patternfly/react-core';
import DashboardWrapper from '../examples/DashboardWrapper';
import CogIcon from '@patternfly/react-icons/dist/esm/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/esm/icons/help-icon';
import QuestionCircleIcon from '@patternfly/react-icons/dist/esm/icons/question-circle-icon';
import imgBrand from './imgBrand.svg';
import imgAvatar from './imgAvatar.svg';

class PageLayoutGrouped extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false
    };
    this.onDropdownToggle = isDropdownOpen => {
      this.setState({
        isDropdownOpen
      });
    };

    this.onDropdownSelect = event => {
      this.setState({
        isDropdownOpen: !this.state.isDropdownOpen
      });
    };

    this.onKebabDropdownToggle = isKebabDropdownOpen => {
      this.setState({
        isKebabDropdownOpen
      });
    };

    this.onKebabDropdownSelect = event => {
      this.setState({
        isKebabDropdownOpen: !this.state.isKebabDropdownOpen
      });
    };
  };

  render() {
    const { isDropdownOpen, isKebabDropdownOpen } = this.state;

    const pageId = 'main-content-page-layout-tertiary-nav';

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

    const headerTools = (
      <PageHeaderTools>
        <PageHeaderToolsGroup
          visibility={{
            default: 'hidden',
            lg: 'visible'
          }} /** the settings and help icon buttons are only visible on desktop sizes and replaced by a kebab dropdown for other sizes */
        >
          <PageHeaderToolsItem>
            <Button aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </PageHeaderToolsItem>
          <PageHeaderToolsItem>
            <Button aria-label="Help actions" variant={ButtonVariant.plain}>
              <QuestionCircleIcon />
            </Button>
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
        <PageHeaderToolsGroup>
          <PageHeaderToolsItem
            visibility={{
              lg: 'hidden'
            }} /** this kebab dropdown replaces the icon buttons and is hidden for desktop sizes */
          >
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </PageHeaderToolsItem>
          <PageHeaderToolsItem
            visibility={{ default: 'hidden', md: 'visible' }} /** this user dropdown is hidden on mobile sizes */
          >
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>John Smith</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </PageHeaderToolsItem>
        </PageHeaderToolsGroup>
        <Avatar src={imgAvatar} alt="Avatar image" />
      </PageHeaderTools>
    );

    const pageHeader = (
      <PageHeader logo={<Brand src={imgBrand} alt="Patternfly Logo" />} headerTools={headerTools} showNavToggle />
    );

    return (
      <React.Fragment>
        <DashboardWrapper
          header={pageHeader}
          isTertiaryNavWidthLimited
          isBreadcrumbWidthLimited
          mainContainerId={pageId}
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
            </PageSection>}
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
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
```

### Sticky section breadcrumb (with breakpoints)

```js isFullscreen
import React from 'react';
import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
} from '@patternfly/react-core';
import DashboardWrapper from '../examples/DashboardWrapper';

class PageLayoutGrouped extends React.Component {

  render() {
    const pageId = 'main-content-page-layout-tertiary-nav';

    return (
      <DashboardWrapper
        isTertiaryNavWidthLimited
        isBreadcrumbWidthLimited
        mainContainerId={pageId}
        isTertiaryNavGrouped
        breadcrumbProps={{
          stickyOnBreakpoint: { 
            md: 'top' 
          }
        }}
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
      </DashboardWrapper>
    );
  }
}
```
