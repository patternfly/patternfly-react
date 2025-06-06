import { useState } from 'react';
import {
  Page,
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  PageSidebar,
  PageSidebarBody,
  PageSection,
  PageGroup,
  PageBreadcrumb,
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

export const PageGroupSection: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const headerToolbar = (
    <Toolbar id="group-section-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton
            aria-label="Global navigation"
            isSidebarOpen={isSidebarOpen}
            onSidebarToggle={onSidebarToggle}
            id="group-section-nav-toggle"
            isHamburgerButton
          />
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo href="https://patternfly.org" target="_blank">
            Logo
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar isSidebarOpen={isSidebarOpen} id="group-section-sidebar">
      <PageSidebarBody>Navigation</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={masthead} sidebar={sidebar}>
      <PageGroup>
        <Nav aria-label="Group section navigation" variant="horizontal-subnav">
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
        <PageSection aria-labelledby="grouped-section">
          <h2 id="grouped-section">Grouped section</h2>
        </PageSection>
      </PageGroup>
      <PageSection aria-labelledby="section-1">
        <h2 id="section-1">Grouped example section 1</h2>
      </PageSection>
      <PageSection aria-labelledby="section-2">
        <h2 id="section-2">Grouped example section 2</h2>
      </PageSection>
    </Page>
  );
};
