---
id: Wizard
section: components
source: react-demos
---

import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

## Demos

### In modal

```js file="../examples/Wizard/InModal.tsx" isFullscreen
```

### In modal, with drawer

```js file="../examples/Wizard/InModalWithDrawer.tsx" isFullscreen
```

### In modal, with drawer and informational step

```js file="../examples/Wizard/InModalWithDrawerInformationalStep.tsx" isFullscreen
```

### In page

```js file="../examples/Wizard/InPage.tsx" isFullscreen
```

### In page, with drawer

```js file="../examples/Wizard/InPageWithDrawer.tsx" isFullscreen
```

### In page, with drawer and informational step

<<<<<<< HEAD
```js file="../examples/Wizard/InPageWithDrawerInformationalStep.tsx" isFullscreen
=======
```js isFullscreen
import React from 'react';
import {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerHead,
  DrawerPanelContent,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionTypes,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  Text,
  TextContent,
  Masthead,
  PageToggleButton,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  Wizard,
  WizardStep
} from '@patternfly/react-core';
import pfLogo from '@patternfly/react-core/src/demos/assets/pf-logo.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

class WizardFullPageWithDrawerInfoStepDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerExpanded: false,
      activeItem: 0
    };

    this.drawerRef = React.createRef();

    this.onExpand = () => {
      this.drawerRef.current && this.drawerRef.current.focus();
    };

    this.onOpenClick = () => {
      this.setState({
        isDrawerExpanded: true
      });
    };

    this.onCloseClick = () => {
      this.setState({
        isDrawerExpanded: false
      });
    };
    this.onNavSelect = (_event, result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }
  render() {
    const { activeItem, isDrawerExpanded } = this.state;
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
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
          </MastheadBrand>
        </MastheadMain>
      </Masthead>
    );
    const Sidebar = (
      <PageSidebar>
        <PageSidebarBody>{PageNav}</PageSidebarBody>
      </PageSidebar>
    );
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

    const createStepContentWithDrawer = (stepName) => (
      <Drawer isInline isExpanded={isDrawerExpanded} onExpand={this.onExpand}>
        <DrawerContent
          panelContent={
            <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
              <DrawerHead>
                <span tabIndex={isDrawerExpanded ? 0 : -1} ref={this.drawerRef}>
                  Drawer content: {stepName}
                </span>
                <DrawerActions>
                  <DrawerCloseButton onClick={this.onCloseClick} />
                </DrawerActions>
              </DrawerHead>
            </DrawerPanelContent>
          }
        >
          <TextContent>
            <Text component={TextVariants.h1}>{stepName} content</Text>
            <p>
              Wizard description goes here. If you need more assistance,{' '}
              <Button isInline variant="link" onClick={this.onOpenClick}>
                see more information
              </Button>{' '}
              in the side drawer.{' '}
            </p>
          </TextContent>
        </DrawerContent>
      </Drawer>
    );

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
          <PageSection>
            <TextContent>
              <Text component="h1">Main title</Text>
              <Text component="p">A demo of a wizard in a page.</Text>
            </TextContent>
          </PageSection>
          <PageSection type={PageSectionTypes.wizard}>
            <Wizard>
              <WizardStep body={null} name="Information" id="wizard-step-1">
                {createStepContentWithDrawer('Information step')}
              </WizardStep>
              <WizardStep
                name="Configuration"
                id="wizard-step-2"
                steps={[
                  <WizardStep body={null} name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
                    {createStepContentWithDrawer('Configuration substep A')}
                  </WizardStep>,
                  <WizardStep body={null} name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
                    {createStepContentWithDrawer('Configuration substep B')}
                  </WizardStep>
                ]}
              />
              <WizardStep body={null} name="Additional" id="wizard-step-3">
                {createStepContentWithDrawer('Additional step')}
              </WizardStep>
              <WizardStep body={null} name="Review" id="wizard-step-4" footer={{ nextButtonText: 'Finish' }}>
                {createStepContentWithDrawer('Review step')}
              </WizardStep>
            </Wizard>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
>>>>>>> remove Page setion variants that are no longer needed and update snapshots
```
