import { Page, PageHeader, PageFooter, PageSection } from '@patternfly/react-core';

export const PageHeaderAndFooterContent: React.FunctionComponent = () => {
  const pageHeader = <PageHeader>Page header</PageHeader>;
  const pageFooter = <PageFooter>Page footer</PageFooter>;

  return (
    <Page isPlain masthead={pageHeader} footer={pageFooter}>
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
