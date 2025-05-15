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
      // strings
      expandText: figma.string('Expand Text'),

      // enums
      toggleText: figma.enum('Type', {
        Regular: figma.string('Toggle Text'),
        'Large Bordered': figma.string('Toggle Text Large')
      }),
      isExpanded: figma.enum('State', { Expanded: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <AccordionItem isExpanded={props.isExpanded}>
        <AccordionToggle>{props.toggleText}</AccordionToggle>
        <AccordionContent>
          <p>{props.expandText}</p>
        </AccordionContent>
      </AccordionItem>
    )
  }
);
