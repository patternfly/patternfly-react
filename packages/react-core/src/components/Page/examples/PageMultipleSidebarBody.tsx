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

export const PageMultipleSidebarBody: React.FunctionComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const onSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const headerToolbar = (
    <Toolbar id="multiple-sidebar-body-toolbar">
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
            id="multiple-sidebar-body-nav-toggle"
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
    <PageSidebar isSidebarOpen={isSidebarOpen} id="multiple-sidebar-body-sidebar">
      <PageSidebarBody isContextSelector>
        First sidebar body (for a context selector/perspective switcher)
      </PageSidebarBody>
      <PageSidebarBody usePageInsets>Second sidebar body (with insets)</PageSidebarBody>
      <PageSidebarBody isFilled={true}>Third sidebar body (with fill)</PageSidebarBody>
      <PageSidebarBody isFilled={false} usePageInsets>
        Fourth sidebar body (with insets and no fill)
      </PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={masthead} sidebar={sidebar}>
      <PageSection aria-labelledby="section-1">
        <h2 id="section-1">Multiple sidebar body example section 1</h2>
      </PageSection>
      <PageSection aria-labelledby="section-2">
        <h2 id="section-2">Multiple sidebar body example section 2</h2>
      </PageSection>
      <PageSection aria-labelledby="section-3">
        <h2 id="section-3">Multiple sidebar body example section 3</h2>
      </PageSection>
    </Page>
  );
};
