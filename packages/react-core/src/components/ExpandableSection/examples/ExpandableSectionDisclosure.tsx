import { useState } from 'react';
import { ExpandableSection } from '@patternfly/react-core';

export const ExpandableSectionDisclosure: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = (_event: React.MouseEvent, isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  return (
    <ExpandableSection
      toggleText={
        isExpanded ? 'Show less disclosure variation example content' : 'Show more disclosure variation example content'
      }
      onToggle={onToggle}
      isExpanded={isExpanded}
      displaySize="lg"
      isWidthLimited
    >
      This content is visible only when the component is expanded.
    </ExpandableSection>
  );
};
