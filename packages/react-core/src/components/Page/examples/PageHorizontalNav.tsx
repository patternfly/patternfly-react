import {
  Page,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  PageSection,
  Toolbar,
  ToolbarContent,
  ToolbarItem
} from '@patternfly/react-core';

export const PageHorizontalNav: React.FunctionComponent = () => {
  const headerToolbar = (
    <Toolbar id="horizontal-toolbar">
      <ToolbarContent>
        <ToolbarItem>Navigation</ToolbarItem>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const masthead = (
    <Masthead inset={{ default: 'insetXs' }}>
      <MastheadMain>
        <MastheadBrand>
          <MastheadLogo href="https://patternfly.org" target="_blank">
            Logo
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );

  return (
    <Page masthead={masthead}>
      <PageSection aria-labelledby="section-1">
        <h2 id="section-1">Horizontal nav example section 1</h2>
      </PageSection>
      <PageSection variant="secondary" aria-labelledby="section-2">
        <h2 id="section-2">Horizontal nav example section 2 with secondary variant styling</h2>
      </PageSection>
      <PageSection aria-labelledby="section-3">
        <h2 id="section-3">Horizontal nav example section 3</h2>
      </PageSection>
    </Page>
  );
};
