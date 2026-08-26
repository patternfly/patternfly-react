import {
  Page,
  PageHeader,
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

export const PageHeaderContent: React.FunctionComponent = () => {
  const headerToolbar = (
    <Toolbar id="page-header-content-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  const pageHeader = (
    <PageHeader>
      <Masthead>
        <MastheadMain>
          <MastheadBrand>
            <MastheadLogo href="https://patternfly.org" target="_blank">
              Logo
            </MastheadLogo>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>{headerToolbar}</MastheadContent>
      </Masthead>
    </PageHeader>
  );

  return (
    <Page masthead={pageHeader}>
      <PageSection aria-labelledby="section-1">
        <h2 id="section-1">Page header example section 1</h2>
      </PageSection>
      <PageSection variant="secondary" aria-labelledby="section-2">
        <h2 id="section-2">Page header example section 2 with secondary variant styling</h2>
      </PageSection>
      <PageSection aria-labelledby="section-3">
        <h2 id="section-3">Page header example section 3</h2>
      </PageSection>
    </Page>
  );
};
