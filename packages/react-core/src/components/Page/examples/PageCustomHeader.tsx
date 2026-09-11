import { Page, PageHeader, PageSection, PageSidebar, PageSidebarBody } from '@patternfly/react-core';

export const PageCustomHeader: React.FunctionComponent = () => {
  const sidebar = (
    <PageSidebar isSidebarOpen id="custom-header-vertical-sidebar">
      <PageSidebarBody>Navigation</PageSidebarBody>
    </PageSidebar>
  );

  return (
    <Page masthead={<PageHeader>Custom page header</PageHeader>} sidebar={sidebar}>
      <PageSection aria-labelledby="custom-header-section">
        <h2 id="custom-header-section">Page content</h2>
      </PageSection>
    </Page>
  );
};
