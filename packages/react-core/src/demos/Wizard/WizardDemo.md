---
id: Wizard
section: components
source: react-demos
---

import imgBrand from './imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';
import { Wizard as WizardDeprecated } from '@patternfly/react-core/deprecated';

## Demos

### In modal

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
  PageSection,
  Modal,
  ModalVariant,
  Wizard,
  WizardHeader,
  WizardStep
} from '@patternfly/react-core';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

class WizardInModalDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onNavSelect = (result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }
  render() {
    const { activeItem } = this.state;

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
            header={<WizardHeader title="Wizard in modal" description="Simple wizard description" />}
            height={400}
          >
            <WizardStep name="Information" id="wizard-step-1">
              <p>Step 1 content</p>
            </WizardStep>
            <WizardStep
              name="Configuration"
              id="wizard-step-2"
              steps={[
                <WizardStep name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
                  <p>Configuration substep A</p>
                </WizardStep>,
                <WizardStep name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
                  <p>Configuration substep B</p>
                </WizardStep>
              ]}
            />
            <WizardStep name="Additional" id="wizard-step-3">
              <p>Step 3 content</p>
            </WizardStep>
            <WizardStep name="Review" d="wizard-step-4" footer={{ nextButtonText: 'Finish' }}>
              <p>Review step content</p>
            </WizardStep>
          </Wizard>
        </Modal>
      </React.Fragment>
    );
  }
}
```

### In modal, with drawer

```js isFullscreen
import React from 'react';
import {
  Button,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerPanelContent,
  DrawerHead,
  Modal,
  ModalVariant,
  Wizard,
  WizardHeader,
  WizardStep
} from '@patternfly/react-core';

class WizardModalWithDrawerDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerExpanded: false
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
  }
  render() {
    const { isDrawerExpanded } = this.state;

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
          {!isDrawerExpanded && (
            <Button isInline variant="link" onClick={this.onOpenClick}>
              Open drawer
            </Button>
          )}
          <div>{stepName} content</div>
        </DrawerContent>
      </Drawer>
    );

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
          header={<WizardHeader title="Wizard in modal with drawer" description="Simple wizard description" />}
          height={400}
        >
          <WizardStep body={null} name="Information" id="wizard-step-1">
            {createStepContentWithDrawer('Information step')}
          </WizardStep>
          <WizardStep
            name="Configuration"
            id="wizard-step-2"
            steps={[
              <WizardStep name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
                {createStepContentWithDrawer('Configuration substep A')}
              </WizardStep>,
              <WizardStep name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
                {createStepContentWithDrawer('Configuration substep B')}
              </WizardStep>
            ]}
          />
          <WizardStep name="Additional" id="wizard-step-3">
            {createStepContentWithDrawer('Additional step')}
          </WizardStep>
          <WizardStep name="Review" d="wizard-step-4" footer={{ nextButtonText: 'Finish' }}>
            {createStepContentWithDrawer('Review step')}
          </WizardStep>
        </Wizard>
      </Modal>
    );
  }
}
```

### In modal, with drawer and informational step

```js isFullscreen
import React from 'react';
import {
  Button,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerContent,
  DrawerPanelContent,
  DrawerHead,
  Modal,
  ModalVariant,
  Text,
  TextContent,
  Wizard,
  WizardHeader,
  WizardStep
} from '@patternfly/react-core';

class WizardModalWithDrawerInfoStepDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerExpanded: false
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
  }
  render() {
    const { isDrawerExpanded } = this.state;

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
      <Modal
        isOpen
        variant={ModalVariant.large}
        showClose={false}
        hasNoBodyWrapper
        aria-describedby="wiz-modal-demo-description"
        aria-labelledby="wiz-modal-demo-title"
      >
        <Wizard
          header={
            <WizardHeader title="Wizard in modal with drawer and info step" description="Simple wizard description" />
          }
          height={400}
        >
          <WizardStep body={null} name="Information" id="wizard-step-1">
            {createStepContentWithDrawer('Information step')}
          </WizardStep>
          <WizardStep
            name="Configuration"
            id="wizard-step-2"
            steps={[
              <WizardStep name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
                {createStepContentWithDrawer('Configuration substep A')}
              </WizardStep>,
              <WizardStep name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
                {createStepContentWithDrawer('Configuration substep B')}
              </WizardStep>
            ]}
          />
          <WizardStep name="Additional" id="wizard-step-3">
            {createStepContentWithDrawer('Additional step')}
          </WizardStep>
          <WizardStep name="Review" d="wizard-step-4" footer={{ nextButtonText: 'Finish' }}>
            {createStepContentWithDrawer('Review step')}
          </WizardStep>
        </Wizard>
      </Modal>
    );
  }
}
```

### In page

```js isFullscreen
import React from 'react';
import { Nav, NavItem, NavList, PageSection, PageSectionTypes, PageSectionVariants } from '@patternfly/react-core';
import { Wizard as WizardDeprecated } from '@patternfly/react-core/deprecated';
import imgBrand from './imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';
import DashboardWrapper from '@patternfly/react-core/src/demos/examples/DashboardWrapper';

class FullPageWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 0
    };
    this.onNavSelect = (result) => {
      this.setState({
        activeItem: result.itemId
      });
    };
  }
  render() {
    const { activeItem } = this.state;

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
            <WizardDeprecated navAriaLabel={`${title} steps`} mainAriaLabel={`${title} content`} steps={steps} />
          </PageSection>
        </DashboardWrapper>
      </React.Fragment>
    );
  }
}
```

### In page, with drawer

```js isFullscreen
import React from 'react';
import {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelContent,
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
  Masthead,
  PageToggleButton,
  MastheadToggle,
  MastheadMain,
  MastheadBrand
} from '@patternfly/react-core';
import { Wizard as WizardDeprecated } from '@patternfly/react-core/deprecated';
import imgBrand from './imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

class FullPageWizard extends React.Component {
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
    this.onNavSelect = (result) => {
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

    const informationPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Information panel content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const configSubstepAPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Configuration substep A content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const configSubstepBPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Configuration substep B content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const additionalPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Additional panel content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const reviewPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Review panel content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const drawerToggleButton = (
      <Button className="pf-u-float-right pf-u-ml-md" isInline variant="link" onClick={this.onOpenClick}>
        Open drawer
      </Button>
    );

    const steps = [
      {
        id: 0,
        name: 'Information',
        component: <p>Step 1 content</p>,
        drawerPanelContent: informationPanelContent,
        drawerToggleButton: drawerToggleButton
      },
      {
        id: 1,
        name: 'Configuration',
        steps: [
          {
            id: 2,
            name: 'Substep A',
            component: <p>Configuration substep A</p>,
            drawerPanelContent: configSubstepAPanelContent,
            drawerToggleButton: drawerToggleButton
          },
          {
            id: 3,
            name: 'Substep B',
            component: <p>Configuration substep B</p>,
            drawerPanelContent: configSubstepBPanelContent,
            drawerToggleButton: drawerToggleButton
          }
        ]
      },
      {
        id: 4,
        name: 'Additional',
        component: <p>Step 3 content</p>,
        drawerPanelContent: additionalPanelContent,
        drawerToggleButton: drawerToggleButton
      },
      {
        id: 5,
        name: 'Review',
        component: <p>Review step content</p>,
        nextButtonText: 'Finish',
        drawerPanelContent: reviewPanelContent,
        drawerToggleButton: drawerToggleButton
      }
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
            <WizardDeprecated
              hasDrawer
              isDrawerExpanded={isDrawerExpanded}
              onExpandDrawer={this.onExpand}
              navAriaLabel={`${title} steps`}
              mainAriaLabel={`${title} content`}
              steps={steps}
            />
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
```

### In page, with drawer and informational step

```js isFullscreen
import React from 'react';
import {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  DrawerActions,
  DrawerCloseButton,
  DrawerHead,
  DrawerPanelContent,
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
  Masthead,
  PageToggleButton,
  MastheadToggle,
  MastheadMain,
  MastheadBrand
} from '@patternfly/react-core';
import { Wizard as WizardDeprecated } from '@patternfly/react-core/deprecated';
import imgBrand from './imgBrand.svg';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

class FullPageWizard extends React.Component {
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
    this.onNavSelect = (result) => {
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

    const informationPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Information panel content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const configSubstepAPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Configuration substep A content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const configSubstepBPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Configuration substep B content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const additionalPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Additional panel content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const reviewPanelContent = (
      <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
        <DrawerHead>
          <span tabIndex={0} ref={this.drawerRef}>
            Review panel content
          </span>
          <DrawerActions>
            <DrawerCloseButton onClick={this.onCloseClick} />
          </DrawerActions>
        </DrawerHead>
      </DrawerPanelContent>
    );

    const drawerToggleButton = (
      <Button className="pf-u-float-right pf-u-ml-md" isInline variant="link" onClick={this.onOpenClick}>
        Open drawer
      </Button>
    );

    const steps = [
      {
        id: 0,
        name: 'Information',
        component: (
          <TextContent>
            <Text component={TextVariants.h1}>Information step content</Text>
            <p>
              Wizard description goes here. If you need more assistance,{' '}
              <Button isInline variant="link" onClick={this.onOpenClick}>
                see more information
              </Button>{' '}
              in the side drawer.{' '}
            </p>
          </TextContent>
        ),
        drawerPanelContent: informationPanelContent
      },
      {
        id: 1,
        name: 'Configuration',
        steps: [
          {
            id: 2,
            name: 'Substep A',
            component: (
              <TextContent>
                <Text component={TextVariants.h1}>Configuration substep A content</Text>
                <p>
                  Wizard description goes here. If you need more assistance,
                  <Button isInline variant="link" onClick={this.onOpenClick}>
                    see more information
                  </Button>
                  in the side drawer.
                </p>
              </TextContent>
            ),
            drawerPanelContent: configSubstepAPanelContent
          },
          {
            id: 3,
            name: 'Substep B',
            component: (
              <TextContent>
                <Text component={TextVariants.h1}>Configuration substep B content</Text>
                <p>
                  Wizard description goes here. If you need more assistance,
                  <Button isInline variant="link" onClick={this.onOpenClick}>
                    see more information
                  </Button>
                  in the side drawer.
                </p>
              </TextContent>
            ),
            drawerPanelContent: configSubstepBPanelContent
          }
        ]
      },
      {
        id: 4,
        name: 'Additional',
        component: (
          <TextContent>
            <Text component={TextVariants.h1}>Additional step content</Text>
            <p>
              Wizard description goes here. If you need more assistance,
              <Button isInline variant="link" onClick={this.onOpenClick}>
                see more information
              </Button>
              in the side drawer.
            </p>
          </TextContent>
        ),
        drawerPanelContent: additionalPanelContent
      },
      {
        id: 5,
        name: 'Review',
        component: (
          <TextContent>
            <Text component={TextVariants.h1}>Review step content</Text>
            <p>
              Wizard description goes here. If you need more assistance,
              <Button isInline variant="link" onClick={this.onOpenClick}>
                see more information
              </Button>
              in the side drawer.
            </p>
          </TextContent>
        ),
        nextButtonText: 'Finish',
        drawerPanelContent: reviewPanelContent
      }
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
            <WizardDeprecated
              hasDrawer
              isDrawerExpanded={isDrawerExpanded}
              onExpandDrawer={this.onExpand}
              navAriaLabel={`${title} steps`}
              mainAriaLabel={`${title} content`}
              steps={steps}
            />
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
```
