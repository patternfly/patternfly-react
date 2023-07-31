import React from 'react';
import { ExpandableSection, ExpandableSectionToggle, Stack, StackItem } from '@patternfly/react-core';

export const ExpandableSectionDetached: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const onToggle = (isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  const contentId = 'detached-expandable-section-content';
  const toggleId = 'detached-expandable-section-toggle';
  return (
    <Stack hasGutter>
      <StackItem>
        <ExpandableSection isExpanded={isExpanded} isDetached toggleId={toggleId} contentId={contentId}>
          This content is visible only when the component is expanded.
        </ExpandableSection>
      </StackItem>
      <StackItem>
        <ExpandableSectionToggle
          isExpanded={isExpanded}
          onToggle={onToggle}
          toggleId={toggleId}
          contentId={contentId}
          direction="up"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </ExpandableSectionToggle>
      </StackItem>
    </Stack>
  );
};
