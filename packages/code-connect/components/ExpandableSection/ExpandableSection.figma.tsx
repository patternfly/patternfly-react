import figma from '@figma/code-connect';
import { ExpandableSection, ExpandableSectionToggle, Stack, StackItem } from '@patternfly/react-core';

// TODO: DESIGN: This component needs to be overhauled. Using the base component approach present in
// other components would significantly reduce complexity.
// TODO: DESIGN: Create toggle component
// onToggle={() => {}} // only required if the user wants to be able to have other side effects when opening/closing
// isExpanded={() => {}} // only required if the user wants to be able to have other side effects when opening/closing

// Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section

const customToggleContent = `
    <div>
    <span>You can also use icons </span>
    <CheckCircleIcon />
    <span> or badges </span>
    <Badge isRead={true}>4</Badge>
    <span> !</span>
  </div>
`;

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    props: {
      toggleText: figma.string('Toggle Text More')
    },
    example: (props) => (
      <ExpandableSection
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
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expanded Basic' },
    props: {
      // enum
      expandedContentSectionText: figma.string('Expanded Text'),
      toggleText: figma.string('Toggle Text Less')
    },
    example: (props) => (
      <ExpandableSection
        isExpanded
        onToggle={() => {}}
        toggleText={isExpanded ? `${props.toggleText}` : 'Show less basic example content'}
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expand Detached' },
    props: {
      // enum
      expandedContentSectionText: figma.string('Expanded Text'),
      toggleText: figma.string('Toggle Text Less'),
      toggleId: 'toggle-id',
      contentId: 'content-id'
    },
    example: (props) => (
      <Stack hasGutter>
        <StackItem>
          <ExpandableSection isExpanded={false} isDetached toggleId={props.toggleId} contentId={props.contentId}>
            {props.expandedContentSectionText}
          </ExpandableSection>
        </StackItem>
        <StackItem>
          <ExpandableSectionToggle
            onToggle={() => {}}
            toggleId={props.toggleId}
            contentId={props.contentId}
            direction="up"
          >
            {isExpanded ? `${props.toggleText}` : 'Show less basic example content'}
          </ExpandableSectionToggle>
        </StackItem>
      </Stack>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expanded Indent' },
    props: {
      // enum
      expandedContentSectionText: figma.string('Expanded Text'),
      toggleText: figma.string('Toggle Text Less'),
      toggleId: 'toggle-id',
      contentId: 'content-id'
    },
    example: (props) => (
      <ExpandableSection
        toggleText={isExpanded ? `${props.toggleText}` : 'Show less indented example content'}
        isExpanded={isExpanded}
        isIndented
        onToggle={() => {}}
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Default Custom Content' },
    example: () => (
      <ExpandableSection toggleContent={customToggleContent} isExpanded={false} onToggle={() => {}}>
        This content is visible only when the component is expanded.
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expanded Custom Content' },
    example: () => (
      <ExpandableSection toggleContent={customToggleContent} isExpanded={true} onToggle={() => {}}>
        This content is visible only when the component is expanded.
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2404-21',
  {
    variant: { State: 'Expanded Custom with Component swap' },
    example: () => (
      <ExpandableSection toggleContent={customToggleContent} isExpanded={true} onToggle={() => {}}>
        This content is visible only when the component is expanded.
      </ExpandableSection>
    )
  }
);
