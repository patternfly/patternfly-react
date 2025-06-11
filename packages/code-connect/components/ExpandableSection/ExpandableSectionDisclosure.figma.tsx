import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2810-80',
  {
    props: {
      // string
      expandedContentSectionText: figma.string('Expanded Text'),
      toggleTextExpanded: figma.string('Toggle Text Less'),
      toggleTextCollapsed: figma.string('Toggle Text More'),

      // boolean
      isIndented: figma.enum('State', {
        'Expanded Indent': true
      }),
      isExpanded: figma.enum('State', {
        Expanded: true,
        'Expand Uncontrolled': true,
        'Expanded Indent': true,
        'Expanded Custom Content': true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section
      <ExpandableSection
        isExpanded={props.isExpanded}
        isIndented={props.isIndented}
        toggleTextCollapsed={props.toggleTextCollapsed}
        toggleTextExpanded={props.toggleTextExpanded}
        variant="truncate"
        toggleContent={props.children}
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);
