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
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';

export const PageMainSectionPadding: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const headerToolbar = (
    <Toolbar id="main-variations-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const header = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton
            aria-label="Global navigation"
            isSidebarOpen={isSidebarOpen}
            onSidebarToggle={onSidebarToggle}
            id="main-variations-nav-toggle"
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
    <PageSidebar isSidebarOpen={isSidebarOpen} id="main-variations-sidebar">
      <PageSidebarBody>Navigation</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection type="subnav" aria-label="With subnav type">
        Section with <code>type="subnav"</code> for horizontal subnav navigation
      </PageSection>
      <PageSection type="nav" aria-label="With nav type">
        Section with <code>type="nav"</code> for tertiary navigation
      </PageSection>
      <PageSection type="tabs" aria-label="With tabs type">
        Section with <code>type="tabs"</code> for tabs
      </PageSection>
      <PageSection type="breadcrumb" aria-label="With breadcrumb type">
        Section with <code>type="breadcrumb"</code> for breadcrumbs
      </PageSection>
      <PageSection aria-label="With default type">
        Section without <code>type</code> prop or <code>type="default"</code> for main sections
      </PageSection>
      <PageSection type="wizard" aria-label="With wizard type">
        Section with <code>type="wizard"</code> for wizards
      </PageSection>
    </Page>
  );
};
