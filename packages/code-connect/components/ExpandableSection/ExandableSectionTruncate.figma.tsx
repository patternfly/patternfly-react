import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

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
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2769-146',
  {
    props: {
      // enum
      isIndented: figma.enum('State', { 'Expanded Indent': true }),
      toggleContent: figma.enum('State', { Expanded: toggleContent }),
      toggleTextCollapsed: figma.enum('State', { Collapsed: figma.string('Toggle Text More') }),
      toggleTextExpanded: figma.enum('State', { Expanded: figma.string('Toggle Text Less') }),

      // boolean
      expandedContentSectionText: figma.enum('State', {
        Default: figma.string('Default Truncate Text'),
        Expanded: figma.string('Expanded Truncate Text')
      }),
      isExpanded: figma.enum('State', { Expanded: true }),

      children: figma.children('*')
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
