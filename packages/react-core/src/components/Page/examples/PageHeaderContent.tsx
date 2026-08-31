import { Page, PageHeader, PageSection } from '@patternfly/react-core';

export const PageHeaderContent: React.FunctionComponent = () => {
  const pageHeader = <PageHeader>Page header</PageHeader>;

  return (
    <Page masthead={pageHeader}>
      <PageSection aria-labelledby="header-example-section-1">
        <h2 id="header-example-section-1">Page header example section 1</h2>
      </PageSection>
      <PageSection variant="secondary" aria-labelledby="header-example-section-2">
        <h2 id="header-example-section-2">Page header example section 2 with secondary variant styling</h2>
      </PageSection>
      <PageSection aria-labelledby="header-example-section-3">
        <h2 id="header-example-section-3">Page header example section 3</h2>
      </PageSection>
    </Page>
  );
};
