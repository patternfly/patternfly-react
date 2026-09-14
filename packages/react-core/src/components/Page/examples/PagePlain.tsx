import { Page, PageSection } from '@patternfly/react-core';

export const PagePlain: React.FunctionComponent = () => (
  <Page isPlain masthead="Custom header" sidebar={null}>
    <PageSection aria-labelledby="plain-page-section">
      <h2 id="plain-page-section">Page content</h2>
    </PageSection>
  </Page>
);
