import React from 'react';
import {
  Page,
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadLogo,
  MastheadBrand,
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

export const PageManagedSidebarClosedDemo: React.FunctionComponent = () => {
  const headerToolbar = (
    <Toolbar id="uncontrolled-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools | Avatar</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label="Global navigation" id="uncontrolled-nav-toggle">
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand>
          <MastheadLogo component="div">Logo that's a div</MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  const sidebar = (
    <PageSidebar id="uncontrolled-sidebar">
      <PageSidebarBody>Navigation</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page id="page-managed-sidebar-closed-demo" isManagedSidebar masthead={masthead} sidebar={sidebar}>
      <PageSection>Section </PageSection>
    </Page>
  );
};

PageManagedSidebarClosedDemo.displayName = 'PageManagedSidebarClosedDemo';
