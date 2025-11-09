import { useState, MouseEvent } from 'react';
import { ExpandableSection, ExpandableSectionToggle, Stack, StackItem } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

export const ExpandableSectionWithHeading = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpandedDetached, setIsExpandedDetached] = useState(false);

  const onToggle1 = (_event: MouseEvent, isExpanded: boolean) => {
    setIsExpanded1(isExpanded);
  };

  const onToggle2 = (_event: MouseEvent, isExpanded: boolean) => {
    setIsExpanded2(isExpanded);
  };

  const onToggleDetached = (isExpanded: boolean) => {
    setIsExpandedDetached(isExpanded);
  };

  return (
    <Stack hasGutter>
      <StackItem>
        <h4>Document with Expandable Sections</h4>
        <p>This demonstrates how to use expandable sections with proper heading semantics.</p>

        {/* Using toggleWrapper prop for proper heading semantics */}
        <ExpandableSection
          toggleWrapper="h5"
          toggleText="Toggle as a heading"
          onToggle={onToggle1}
          isExpanded={isExpanded1}
        >
          <p>
            This content is visible only when the component is expanded. The toggle text above functions as a proper
            heading in the document structure, which is important for screen readers and other assistive technologies.
          </p>
          <p>
            When using the <code>toggleWrapper</code> prop with heading elements (h1-h6), the button is rendered inside
            the heading element, maintaining proper semantic structure.
          </p>
        </ExpandableSection>
      </StackItem>

      <StackItem>
        <h4>Detached Variant with Heading</h4>
        <p>You can also use the detached variant with heading semantics:</p>

        <ExpandableSectionToggle
          toggleWrapper="h5"
          toggleId="detached-heading-toggle"
          contentId="detached-heading-content"
          isExpanded={isExpandedDetached}
          onToggle={onToggleDetached}
        >
          Detached Toggle with Heading
        </ExpandableSectionToggle>

        <ExpandableSection
          isDetached
          toggleId="detached-heading-toggle"
          contentId="detached-heading-content"
          isExpanded={isExpandedDetached}
        >
          <p>This is detached content that can be positioned anywhere in the DOM.</p>
        </ExpandableSection>
      </StackItem>

      <StackItem>
        <h4>Custom Content with Heading</h4>
        <p>You can also use custom content within heading wrappers:</p>

        <ExpandableSection
          toggleWrapper="h5"
          toggleContent={
            <span>
              <CheckCircleIcon /> Custom Heading Content with Icon
            </span>
          }
          onToggle={onToggle2}
          isExpanded={isExpanded2}
        >
          <p>This expandable section uses custom content with an icon inside a heading wrapper.</p>
        </ExpandableSection>
      </StackItem>
    </Stack>
  );
};
