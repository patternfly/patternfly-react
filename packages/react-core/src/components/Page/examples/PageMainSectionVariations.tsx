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
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

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
            variant="plain"
            aria-label="Global navigation"
            isSidebarOpen={isSidebarOpen}
            onSidebarToggle={onSidebarToggle}
            id="main-variations-nav-toggle"
          >
            <BarsIcon />
          </PageToggleButton>
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
      <PageSection type="subnav" aria-label="Horizontal subnavigation">
        Section with <code>type="subnav"</code> for horizontal subnav navigation
      </PageSection>
      <PageSection type="nav" aria-label="Tertiary navigation">
        Section with <code>type="nav"</code> for tertiary navigation
      </PageSection>
      <PageSection type="tabs" aria-label="Tab navigation">
        Section with <code>type="tabs"</code> for tabs
      </PageSection>
      <PageSection type="breadcrumb" aria-label="Breadcrumb navigation">
        Section with <code>type="breadcrumb"</code> for breadcrumbs
      </PageSection>
      <PageSection aria-label="Default navigation">
        Section without <code>type</code> prop or <code>type="default"</code> for main sections
      </PageSection>
      <PageSection type="wizard" aria-label="Wizard navigation">
        Section with <code>type="wizard"</code> for wizards
      </PageSection>
    </Page>
  );
};
