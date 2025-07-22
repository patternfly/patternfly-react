import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

// // TODO: DESIGN: Create toggle component
// // onToggle={() => {}} // only required if the user wants to be able to have other side effects when opening/closing
// // isExpanded={() => {}} // only required if the user wants to be able to have other side effects when opening/closing

// // Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2769-146',
  {
    props: {
      toggleText: figma.string('Toggle Text More')
    },
    example: (props) => (
      <ExpandableSection
        isExpanded={isExpanded}
        onToggle={() => {}}
        toggleText={isExpanded ? 'Show less basic example content' : `${props.toggleText}`}
      >
        This content is visible only when the component is expanded.
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2769-146',
  {
    variant: { State: 'Expanded' },
    props: {
      toggleText: figma.string('Toggle Text Less'),
      defaultContentSectionText: figma.string('Default Truncate Text')
    },
    example: (props) => (
      <ExpandableSection
        isExpanded={isExpanded}
        onToggle={() => {}}
        toggleText={isExpanded ? 'Show less basic example content' : `${props.toggleText}`}
        variant="truncate"
      >
        {props.defaultContentSectionText}
      </ExpandableSection>
    )
  }
);
