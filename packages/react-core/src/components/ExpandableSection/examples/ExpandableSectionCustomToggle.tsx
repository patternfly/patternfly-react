import { useState } from 'react';
import { ExpandableSection, Badge, Stack, StackItem } from '@patternfly/react-core';
import CheckCircleIcon from '@patternfly/react-icons/dist/esm/icons/check-circle-icon';

export const ExpandableSectionCustomToggle: React.FunctionComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggle = (_event: React.MouseEvent, isExpanded: boolean) => {
    setIsExpanded(isExpanded);
  };

  return (
    <Stack hasGutter>
      <StackItem>
        <h3>Custom Toggle Content</h3>
        <p>You can use custom content such as icons and badges in the toggle:</p>
        <ExpandableSection
          toggleContent={
            <div>
              <span>You can also use icons </span>
              <CheckCircleIcon />
              <span> or badges </span>
              <Badge isRead={true}>4</Badge>
              <span> !</span>
            </div>
          }
          onToggle={onToggle}
          isExpanded={isExpanded}
        >
          This content is visible only when the component is expanded.
        </ExpandableSection>
      </StackItem>

      <StackItem>
        <h3>Accessibility Note</h3>
        <p>
          <strong>Important:</strong> If you need the toggle text to function as a heading in the document structure, do
          NOT put heading elements (h1-h6) inside the <code>toggleContent</code> prop, as this creates invalid HTML
          structure. Instead, use the <code>toggleWrapper</code> prop.
        </p>
      </StackItem>
    </Stack>
  );
};
