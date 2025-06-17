import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

// TODO: FIGMA: This component needs to be overhauled. Using the base component approach present in
// other components would significantly reduce complexity.

// TODO: FIGMA:

// TODO: FIGMA: Create toggle component
const toggleContent = `
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
      // enum
      isIndented: figma.enum('State', { 'Expanded Indent': true }),
      isDetached: figma.enum('State', { 'Expand Detached': true }),
      isExpanded: figma.enum('State', {
        'Expanded Basic': true,
        'Expand Detached': true,
        'Expanded Indent': true,
        'Expanded Custom Content': true,
        'Expanded Custom with Component swap': true
      }),
      toggleContent: figma.enum('State', {
        'Default Custom Content': toggleContent,
        'Expanded Custom Content': toggleContent,
        'Expanded Custom with Component swap': toggleContent
      }),
      toggleTextExpanded: figma.enum('State', {
        'Expanded Basic': figma.string('Toggle Text Less'),
        'Expand Detached': figma.string('Toggle Text Less'),
        'Expanded Indent': figma.string('Toggle Text Less'),
        'Expanded Custom Content': figma.string('Toggle Text Less'),
        'Expanded Custom with Component swap': figma.string('Toggle Text Less')
      }),
      expandedContentSectionText: figma.enum('State', {
        'Expanded Basic': figma.string('Expanded Text'),
        'Expand Detached': figma.string('Expanded Text'),
        'Expanded Indent': figma.string('Expanded Text'),
        'Expanded Custom Content': figma.string('Expanded Text'),
        'Expanded Custom with Component swap': figma.string('Expanded Text')
      }),
      toggleTextCollapsed: figma.enum('State', {
        Default: figma.string('Toggle Text More'),
        Hover: figma.string('Toggle Text More'),
        'Default Custom Content': figma.string('Toggle Text More')
      })
    },
    example: (props) => (
      // Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section
      <ExpandableSection
        // onToggle={() => {}} // only required if the user wants to be able to have other side effects when opening/closing
        // isExpanded={() => {}} // only required if the user wants to be able to have other side effects when opening/closing
        isIndented={props.isIndented}
        toggleContent={props.toggleContent}
        toggleTextCollapsed={props.toggleTextCollapsed}
        toggleTextExpanded={props.toggleTextExpanded}
        variant="truncate"
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);
