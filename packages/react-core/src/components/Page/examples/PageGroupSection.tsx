import React from 'react';
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  PageSidebar,
  PageSection,
  PageGroup,
  PageBreadcrumb,
  PageNavigation,
  PageSectionVariants,
  PageToggleButton,
  Breadcrumb,
  BreadcrumbItem,
  Nav,
  NavList,
  NavItem,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

export const PageGroupSection: React.FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(true);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const headerToolbar = (
    <Toolbar id="group-section-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          variant="plain"
          aria-label="Global navigation"
          isNavOpen={isNavOpen}
          onNavToggle={onNavToggle}
          id="group-section-nav-toggle"
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href="https://patternfly.org" target="_blank">
          Logo
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const sidebar = <PageSidebar nav="Navigation" isNavOpen={isNavOpen} id="group-section-sidebar" />;

  return (
    <Page header={header} sidebar={sidebar}>
      <PageGroup>
        <PageNavigation>
          <Nav aria-label="Group section navigation" variant="tertiary">
            <NavList>
              <NavItem href="#" itemId={0} isActive>
                System panel
              </NavItem>
              <NavItem href="#" itemId={1}>
                Policy
              </NavItem>
              <NavItem href="#" itemId={2}>
                Authentication
              </NavItem>
              <NavItem href="#" itemId={3}>
                Network services
              </NavItem>
              <NavItem href="#" itemId={4}>
                Server
              </NavItem>
            </NavList>
          </Nav>
        </PageNavigation>
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
        <PageSection variant={PageSectionVariants.light}>Grouped section</PageSection>
      </PageGroup>
      <PageSection variant={PageSectionVariants.dark}>Section 1</PageSection>
      <PageSection variant={PageSectionVariants.dark}>Section 2</PageSection>
    </Page>
  );
};
