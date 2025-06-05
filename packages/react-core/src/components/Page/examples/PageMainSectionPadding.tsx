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
    <Toolbar id="main-padding-toolbar">
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
            id="main-padding-nav-toggle"
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
    <PageSidebar isSidebarOpen={isSidebarOpen} id="main-padding-sidebar">
      <PageSidebarBody>Navigation</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={masthead} sidebar={sidebar}>
      <PageSection aria-labelledby="section-1">
        <h2 id="section-1">Section with default padding</h2>
      </PageSection>
      <PageSection padding={{ default: 'noPadding' }} aria-labelledby="section-2">
        <h2 id="section-2">Section with no padding</h2>
      </PageSection>
      <PageSection padding={{ default: 'noPadding', md: 'padding' }} aria-labelledby="section-3">
        <h2 id="section-3">Section with padding on medium</h2>
      </PageSection>
      <PageSection padding={{ md: 'noPadding' }} aria-labelledby="section-4">
        <h2 id="section-4">Section with no padding on medium</h2>
      </PageSection>
    </Page>
  );
};
