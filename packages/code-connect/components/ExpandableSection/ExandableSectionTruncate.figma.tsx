import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

// TODO: DESIGN: Create toggle component
// onToggle={() => {}} // only required if the user wants to be able to have other side effects when opening/closing
// isExpanded={() => {}} // only required if the user wants to be able to have other side effects when opening/closing

// Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2769-146',
  {
    props: {
      // enum
      isIndented: figma.enum('State', { 'Expanded Indent': true }),
      toggleTextCollapsed: figma.enum('State', { Collapsed: figma.string('Toggle Text More') }),
      toggleTextExpanded: figma.enum('State', { Expanded: figma.string('Toggle Text Less') }),

      // boolean
      expandedContentSectionText: figma.enum('State', {
        Default: figma.string('Default Truncate Text'),
        Expanded: figma.string('Expanded Truncate Text')
      })
    },
    example: (props) => (
      <ExpandableSection
        isIndented={props.isIndented}
        toggleTextCollapsed={props.toggleTextCollapsed}
        toggleTextExpanded={props.toggleTextExpanded}
        variant="truncate"
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);
