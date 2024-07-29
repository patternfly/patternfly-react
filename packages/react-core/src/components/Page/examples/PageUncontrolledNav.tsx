import React from 'react';
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

export const PageUncontrolledNav: React.FunctionComponent = () => {
  const headerToolbar = (
    <Toolbar id="uncontrolled-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
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
          <MastheadLogo href="https://patternfly.org" target="_blank">
            Logo
          </MastheadLogo>
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
    <Page isManagedSidebar masthead={masthead} sidebar={sidebar}>
      <PageSection>Section 1</PageSection>
      <PageSection>Section 2</PageSection>
      <PageSection>Section 3</PageSection>
    </Page>
  );
};
