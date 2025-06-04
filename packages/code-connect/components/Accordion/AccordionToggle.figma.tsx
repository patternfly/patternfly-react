import figma from '@figma/code-connect';
import { AccordionItem, AccordionToggle, AccordionContent } from '@patternfly/react-core';

figma.connect(
  AccordionToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1423-687',
  {
    props: {
      // string
      expandText: figma.string('Expand Text'),

      // enum
      toggleTextExpanded: figma.enum('State', {
        Default: figma.string('Toggle Text'),
        Hover: figma.string('Toggle Text'),
        Expanded: figma.string('Toggle Text Expanded')
      }),
      isExpanded: figma.enum('State', { Expanded: true }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Accordion can be found at https://www.patternfly.org/components/accordion
      <AccordionItem isExpanded={props.isExpanded}>
        <AccordionToggle onClick={() => {}} id="<your-id>">
          {props.toggleTextExpanded}
        </AccordionToggle>
        <AccordionContent id="accordion-content-example">
          <p>{props.expandText}</p>
        </AccordionContent>
      </AccordionItem>
    )
  }
);
