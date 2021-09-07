---
id: Wizard
section: components
---

import {
Brand,
Breadcrumb,
BreadcrumbItem,
Modal,
ModalVariant,
Nav,
NavItem,
NavList,
Page,
PageToggleButton,
PageSection,
PageSectionTypes,
PageSectionVariants,
PageSidebar,
Progress,
SkipToContent,
Text,
TextContent,
Title,
Wizard
} from '@patternfly/react-core';
import imgBrand from './imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

## Demos

### In Modal

```js isFullscreen
import React from 'react';
import { Modal, ModalVariant, Wizard } from '@patternfly/react-core';

class BasicWizardDemo extends React.Component {
  render() {
    const steps = [
      { id: 0, name: 'Information', component: <p>Step 1 content</p> },
      {
        id: 1,
        name: 'Configuration',
        steps: [
          {
            id: 2,
            name: 'Substep A',
            component: <p>Configuration substep A</p>
          },
          {
            id: 3,
            name: 'Substep B',
            component: <p>Configuration substep B</p>
          }
        ],
        component: <p>Step 2 content</p>
      },
      { id: 4, name: 'Additional', component: <p>Step 3 content</p> },
      { id: 5, name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }
    ];
    const title = 'Basic wizard';
    return (
      <Modal
        isOpen
        variant={ModalVariant.large}
        showClose={false}
        hasNoBodyWrapper
        aria-describedby="wiz-modal-demo-description"
        aria-labelledby="wiz-modal-demo-title"
      >
        <Wizard
          navAriaLabel={`${title} steps`}
          mainAriaLabel={`${title} content`}
          titleId="wiz-modal-demo-title"
          descriptionId="wiz-modal-demo-description"
          title="Simple wizard in modal"
          description="Simple wizard description"
          steps={steps}
          height={400}
        />
      </Modal>
    );
  }
}
```

### In Page

```js isFullscreen
import React from 'react';
import {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionTypes,
  PageSectionVariants,
  PageSidebar,
  Progress,
  SkipToContent,
  Text,
  TextContent,
  Title,
  Wizard,
  Masthead,
  PageToggleButton,
  MastheadToggle,
  MastheadMain,
  MastheadBrand
} from '@patternfly/react-core';
import imgBrand from './imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

class FullPageWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onNavSelect = result => {
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
          <NavItem itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const Header = (
      <Masthead id="basic">
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadMain>
          <MastheadBrand>
            <Brand src={imgBrand} alt="Patternfly logo" />
          </MastheadBrand>
        </MastheadMain>
      </Masthead>
    );
    const Sidebar = <PageSidebar nav={PageNav} />;
    const pageId = 'main-content-page-layout-default-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;
    const PageBreadcrumb = (
      <Breadcrumb>
        <BreadcrumbItem>Section home</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#">Section title</BreadcrumbItem>
        <BreadcrumbItem to="#" isActive>
          Section landing
        </BreadcrumbItem>
      </Breadcrumb>
    );

    const steps = [
      { id: 0, name: 'Information', component: <p>Step 1 content</p> },
      {
        id: 1,
        name: 'Configuration',
        steps: [
          {
            id: 2,
            name: 'Substep A',
            component: <p>Configuration substep A</p>
          },
          {
            id: 3,
            name: 'Substep B',
            component: <p>Configuration substep B</p>
          }
        ],
        component: <p>Step 2 content</p>
      },
      { id: 4, name: 'Additional', component: <p>Step 3 content</p> },
      { id: 5, name: 'Review', component: <p>Review step content</p>, nextButtonText: 'Finish' }
    ];
    const title = 'Basic wizard';

    return (
      <React.Fragment>
        <Page
          header={Header}
          sidebar={Sidebar}
          isManagedSidebar
          skipToContent={PageSkipToContent}
          breadcrumb={PageBreadcrumb}
          mainContainerId={pageId}
        >
          <PageSection variant={PageSectionVariants.light}>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">A demo of a wizard in a page.</Text>
            </TextContent>
          </PageSection>
          <PageSection type={PageSectionTypes.wizard} variant={PageSectionVariants.light}>
            <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} />
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
```
