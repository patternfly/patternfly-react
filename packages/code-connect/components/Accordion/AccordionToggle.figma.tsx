import figma from '@figma/code-connect';
import { AccordionItem, AccordionToggle, AccordionContent } from '@patternfly/react-core';

/**
 * PatternFly Accordion component integration for Figma Code Connect
 */

figma.connect(
  AccordionToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1423-687&m=dev',
  {
    props: {
      // string
      expandText: figma.string('Expand Text'),

      // enums
      toggleTextExpanded: figma.enum('State', {
        Default: figma.string('Toggle Text'),
        Hover: figma.string('Toggle Text'),
        Expanded: figma.string('Toggle Text Expanded')
      }),

      // enum
      isExpanded: figma.enum('State', {
        Expanded: true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <AccordionItem isExpanded={props.isExpanded}>
        <AccordionToggle>{props.toggleTextExpanded}</AccordionToggle>
        <AccordionContent>
          <p>{props.expandText}</p>
        </AccordionContent>
      </AccordionItem>
    )
  }
);
