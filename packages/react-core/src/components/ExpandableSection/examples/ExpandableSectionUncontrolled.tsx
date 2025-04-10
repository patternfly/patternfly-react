import { ExpandableSection } from '@patternfly/react-core';

export const ExpandableSectionUncontrolled: React.FunctionComponent = () => (
  <ExpandableSection toggleText="Show more uncontrolled example content">
    This content is visible only when the component is expanded.
  </ExpandableSection>
);
