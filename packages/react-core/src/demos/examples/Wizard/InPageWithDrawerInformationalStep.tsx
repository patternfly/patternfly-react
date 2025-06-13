import { Fragment, useRef, useState } from 'react';
import {
  Brand,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Content,
  Drawer,
  DrawerActions,
  DrawerCloseButton,
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
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadLogo,
  PageToggleButton,
  Wizard,
  WizardStep
} from '@patternfly/react-core';
import pfLogo from '@patternfly/react-core/src/demos/assets/PF-HorizontalLogo-Color.svg';

export const WizardFullPageWithDrawerInfoStepDemo: React.FunctionComponent = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const drawerRef = useRef<HTMLSpanElement | null>(null);

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

  const masthead = (
    <Masthead id="basic">
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton isHamburgerButton aria-label="Global navigation" />
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo>
            <Brand src={pfLogo} alt="PatternFly" heights={{ default: '36px' }} />
          </MastheadLogo>
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

  const handleClick = (event) => {
    event.preventDefault();

    const mainContentElement = document.getElementById(pageId);
    if (mainContentElement) {
      mainContentElement.focus();
    }
  };

  const PageSkipToContent = (
    <SkipToContent onClick={handleClick} href={`#${pageId}`}>
      Skip to content
    </SkipToContent>
  );

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
          <DrawerPanelContent widths={{ default: 'width_33' }}>
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
          className="pf-v6-c-wizard__main-body"
          direction={{ default: 'column' }}
          spaceItems={{ default: 'spaceItemsLg' }}
          height="100%"
        >
          <Content>
            <p>{stepName} content</p>
            <p>
              Wizard description goes here. If you need more assistance,{' '}
              <Button isInline variant="link" onClick={onOpenClick}>
                see more information
              </Button>{' '}
              in the side drawer.{' '}
            </p>
          </Content>
        </Flex>
      </DrawerContent>
    </Drawer>
  );

  return (
    <Fragment>
      <Page
        masthead={masthead}
        sidebar={Sidebar}
        isManagedSidebar
        skipToContent={PageSkipToContent}
        breadcrumb={PageBreadcrumb}
        mainContainerId={pageId}
      >
        <PageSection aria-labelledby="main-title">
          <Content>
            <h1 id="main-title">Main title</h1>
            <p>A demo of a wizard in a page.</p>
          </Content>
        </PageSection>
        <PageSection hasBodyWrapper={false} type={PageSectionTypes.wizard} ß aria-label="Wizard container">
          <Wizard>
            <WizardStep body={{ hasNoPadding: true }} name="Information" id="wizard-step-1">
              {createStepContentWithDrawer('Information step')}
            </WizardStep>
            <WizardStep
              name="Configuration"
              id="wizard-step-2"
              steps={[
                <WizardStep body={{ hasNoPadding: true }} name="Substep A" id="wizard-step-2a" key="wizard-step-2a">
                  {createStepContentWithDrawer('Configuration substep A')}
                </WizardStep>,
                <WizardStep body={{ hasNoPadding: true }} name="Substep B" id="wizard-step-2b" key="wizard-step-2b">
                  {createStepContentWithDrawer('Configuration substep B')}
                </WizardStep>
              ]}
            />
            <WizardStep body={{ hasNoPadding: true }} name="Additional" id="wizard-step-3">
              {createStepContentWithDrawer('Additional step')}
            </WizardStep>
            <WizardStep
              body={{ hasNoPadding: true }}
              name="Review"
              id="wizard-step-4"
              footer={{ nextButtonText: 'Finish' }}
            >
              {createStepContentWithDrawer('Review step')}
            </WizardStep>
          </Wizard>
        </PageSection>
      </Page>
    </Fragment>
  );
};
