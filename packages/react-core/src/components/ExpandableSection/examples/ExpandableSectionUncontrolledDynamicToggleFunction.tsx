import { ExpandableSection } from '@patternfly/react-core';

export const ExpandableSectionUncontrolledDynamicToggleFunction: React.FunctionComponent = () => (
  <ExpandableSection
    toggleContent={(isExpanded) =>
      isExpanded
        ? 'Show less uncontrolled dynamic toggle example content'
        : 'Show more uncontrolled dynamic toggle example content'
    }
  >
    This content is visible only when the component is expanded.
  </ExpandableSection>
);
