import { Page, PageHeader, PageSection } from '@patternfly/react-core';

export const PagePlain: React.FunctionComponent = () => (
  <Page isPlain masthead={<PageHeader>Custom header</PageHeader>} sidebar={null}>
    <PageSection aria-labelledby="plain-page-section">
      <h2 id="plain-page-section">Page content</h2>
    </PageSection>
  </Page>
);
