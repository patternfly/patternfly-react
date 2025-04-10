import { ExpandableSection } from '@patternfly/react-core';

export const ExpandableSectionUncontrolledDynamicToggle: React.FunctionComponent = () => (
  <ExpandableSection
    toggleTextExpanded="Show less uncontrolled dynamic toggle example content"
    toggleTextCollapsed="Show more uncontrolled dynamic toggle example content"
  >
    This content is visible only when the component is expanded.
  </ExpandableSection>
);
