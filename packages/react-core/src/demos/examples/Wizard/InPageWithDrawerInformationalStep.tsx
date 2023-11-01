import React from 'react';
import {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
  DrawerColorVariant,
  DrawerContent,
  DrawerHead,
  DrawerPanelContent,
  Flex,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSectionTypes,
  PageSectionVariants,
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

export const WizardFullPageWithDrawerInfoStepDemo: React.FunctionComponent = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);

  const drawerRef = React.useRef<HTMLSpanElement | null>(null);

  const onExpand = () => {
    if (drawerRef.current) {
      drawerRef.current.focus();
    }
  };

  const onOpenClick = () => {
    setIsDrawerExpanded(true);
  };

  const onCloseClick = () => {
    setIsDrawerExpanded(false);
  };

  const onNavSelect = (_event: any, result: any) => {
    setActiveItem(result.itemId);
  };

  const PageNav = (
    <Nav onSelect={onNavSelect} aria-label="Nav">
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

  const createStepContentWithDrawer = (stepName: string) => (
    <Drawer isInline isExpanded={isDrawerExpanded} onExpand={onExpand}>
      <DrawerContent
        panelContent={
          <DrawerPanelContent widths={{ default: 'width_33' }} colorVariant={DrawerColorVariant.light200}>
            <DrawerHead>
              <span tabIndex={isDrawerExpanded ? 0 : -1} ref={drawerRef}>
                Drawer content: {stepName}
              </span>
              <DrawerActions>
                <DrawerCloseButton onClick={onCloseClick} />
              </DrawerActions>
            </DrawerHead>
          </DrawerPanelContent>
        }
      >
        <Flex
          className="pf-v5-c-wizard__main-body"
          direction={{ default: 'column' }}
          spaceItems={{ default: 'spaceItemsLg' }}
          height="100%"
        >
          <TextContent>
            <Text>{stepName} content</Text>
            <p>
              Wizard description goes here. If you need more assistance,{' '}
              <Button isInline variant="link" onClick={onOpenClick}>
                see more information
              </Button>{' '}
              in the side drawer.{' '}
            </p>
          </TextContent>
        </Flex>
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
        <PageSection variant={PageSectionVariants.light}>
          <TextContent>
            <Text component="h1">Main title</Text>
            <Text component="p">A demo of a wizard in a page.</Text>
          </TextContent>
        </PageSection>
        <PageSection type={PageSectionTypes.wizard} variant={PageSectionVariants.light}>
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
};
