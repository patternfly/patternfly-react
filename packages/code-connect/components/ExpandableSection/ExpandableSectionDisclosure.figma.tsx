import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

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
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2810-80',
  {
    props: {
      toggleText: figma.string('Toggle Text More'),
      isExpanded: false
    },
    example: (props) => (
      <ExpandableSection
        isExpanded={props.isExpanded}
        onToggle={() => {}}
        toggleText={props.isExpanded ? 'Show less basic example content' : `${props.toggleText}`}
      >
        This content is visible only when the component is expanded.
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2810-80',
  {
    variant: { State: 'Expanded' },
    props: {
      toggleText: figma.string('Toggle Text Less'),
      expandedContentSectionText: figma.string('Expanded Text'),
      isExpanded: true
    },
    example: (props) => (
      <ExpandableSection
        isExpanded={props.isExpanded}
        onToggle={() => {}}
        toggleText={props.isExpanded ? `${props.toggleText}` : 'Show more basic example content'}
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2810-80',
  {
    variant: { State: 'Expand Uncontrolled' },
    props: {
      toggleText: figma.string('Toggle Text More'),
      expandedContentSectionText: figma.string('Expanded Text'),
      isExpanded: true
    },
    example: (props) => (
      <ExpandableSection
        isExpanded={props.isExpanded}
        onToggle={() => {}}
        toggleText={props.isExpanded ? `${props.toggleText}` : 'Show less basic example content'}
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2810-80',
  {
    variant: { State: 'Expanded Indent' },
    props: {
      expandedContentSectionText: figma.string('Expanded Text'),
      toggleText: figma.string('Toggle Text More'),
      isExpanded: true
    },
    example: (props) => (
      <ExpandableSection
        isExpanded={props.isExpanded}
        onToggle={() => {}}
        toggleText={props.isExpanded ? `${props.toggleText}` : 'Show less basic example content'}
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2810-80',
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
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2810-80',
  {
    variant: { State: 'Expanded Custom Content' },
    props: {
      toggleText: figma.string('Toggle Text More'),
      expandedContentSectionText: figma.string('Expanded Text'),
      isExpanded: true
    },
    example: (props) => (
      <ExpandableSection
        isExpanded={props.isExpanded}
        onToggle={() => {}}
        toggleText={props.isExpanded ? `${props.toggleText}` : 'Show less basic example content'}
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);
