import { FunctionComponent, MouseEvent, useState } from 'react';
import { ExpandableSection } from '@patternfly/react-core';

export const ExpandableSectionDisclosure: FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = (_event: MouseEvent, isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  return (
    <ExpandableSection
      toggleText={isExpanded ? 'Show less' : 'Show more'}
      onToggle={onToggle}
      isExpanded={isExpanded}
      displaySize="lg"
      isWidthLimited
    >
      This content is visible only when the component is expanded.
    </ExpandableSection>
  );
};
