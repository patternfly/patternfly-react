---
id: Wizard
section: components
---

import imgBrand from './imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import DashboardWrapper from '../examples/DashboardWrapper';

## Demos

### In Modal

```js isFullscreen
import React from 'react';
import {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionTypes,
  PageSectionVariants,
  PageSidebar,
  Progress,
  Text,
  TextContent,
  Title,
  Wizard,
  Masthead,
  PageToggleButton,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  Modal,
  ModalVariant
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import DashboardWrapper from '../examples/DashboardWrapper';

class BasicWizardDemo extends React.Component {
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
        <DashboardWrapper hasPageTemplateTitle>
          <PageSection isWidthLimited>
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
        </DashboardWrapper>
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
      </React.Fragment>
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
import DashboardWrapper from '../examples/DashboardWrapper';

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
        <DashboardWrapper hasPageTemplateTitle>
          <PageSection type={PageSectionTypes.wizard} variant={PageSectionVariants.light}>
            <Wizard navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} />
          </PageSection>
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
```
