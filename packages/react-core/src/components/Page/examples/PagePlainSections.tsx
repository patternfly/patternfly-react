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
  PageToggleButton,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';

export const PagePlainSections: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const headerToolbar = (
    <Toolbar id="plain-sections-toolbar">
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
            aria-label="Plain sections example navigation"
            isSidebarOpen={isSidebarOpen}
            onSidebarToggle={onSidebarToggle}
            id="plain-sections-nav-toggle"
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
    <PageSidebar isSidebarOpen={isSidebarOpen} id="plain-sections-sidebar">
      <PageSidebarBody>Navigation</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={masthead} sidebar={sidebar}>
      <PageSection isPlain aria-label="Plain section example">
        <h2>Plain PageSection</h2>
        <p>
          This section uses <code>isPlain</code> to apply plain styling with no background color.
        </p>
      </PageSection>
      <PageSection aria-label="Default section example">
        <h2>Default PageSection</h2>
        <p>This section has the default styling with a background color.</p>
      </PageSection>
      <PageGroup isPlain>
        <PageSection aria-label="Section in plain group">
          <h2>PageSection inside Plain PageGroup</h2>
          <p>
            This section is inside a PageGroup with <code>isPlain</code> applied.
          </p>
        </PageSection>
        <PageSection aria-label="Another section in plain group">
          <h2>Another Section in Plain Group</h2>
          <p>Both sections are grouped with plain styling.</p>
        </PageSection>
      </PageGroup>
      <PageSection variant="secondary" aria-label="Secondary variant section">
        <h2>Secondary Variant Section</h2>
        <p>This section uses the secondary variant for contrast.</p>
      </PageSection>
    </Page>
  );
};
