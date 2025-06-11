import figma from '@figma/code-connect';
import { ExpandableSection } from '@patternfly/react-core';

figma.connect(
  ExpandableSection,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2769-146',
  {
    props: {
      // string
      toggleTextCollapsed: figma.enum('State', { Collapsed: figma.string('Toggle Text More') }),
      toggleTextExpanded: figma.enum('State', { Expanded: figma.string('Toggle Text Less') }),

      // boolean
      isExpanded: figma.enum('State', { Expanded: true }),
      propsExpandedContentSectionText: figma.enum('State', {
        Default: figma.string('Default Truncate Text'),
        Expanded: figma.string('Expanded Truncate Text')
      }),

      // enum
      expandedContentSectionText: figma.enum('State', { 'Expanded Truncate': true }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for ExpandableSection can be found at https://www.patternfly.org/components/expandable-section
      <ExpandableSection
        toggleTextCollapsed={props.toggleTextCollapsed}
        toggleTextExpanded={props.toggleTextExpanded}
        onToggle={() => {}}
        variant="truncate"
        isExpanded={props.isExpanded}
        toggleContent={props.children}
      >
        {props.expandedContentSectionText}
      </ExpandableSection>
    )
  }
);
