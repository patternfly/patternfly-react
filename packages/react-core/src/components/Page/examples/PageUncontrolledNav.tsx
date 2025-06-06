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
          <PageToggleButton isHamburgerButton aria-label="Global navigation" id="uncontrolled-nav-toggle" />
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
      <PageSection aria-labelledby="section-1">
        <h2 id="section-1">Uncontrolled nav example section 1</h2>
      </PageSection>
      <PageSection aria-labelledby="section-2">
        <h2 id="section-2">Uncontrolled nav example section 2</h2>
      </PageSection>
      <PageSection aria-labelledby="section-3">
        <h2 id="section-3">Uncontrolled nav example section 3</h2>
      </PageSection>
    </Page>
  );
};
