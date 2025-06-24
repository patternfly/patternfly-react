import figma from '@figma/code-connect';
import { AccordionItem, AccordionToggle, AccordionContent } from '@patternfly/react-core';

// Documentation for AccordionToggle can be found at https://www.patternfly.org/components/accordion

figma.connect(
  AccordionToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=1423-687',
  {
    props: {
      // string
      expandText: figma.string('Expand Text'),

      // enum
      isExpanded: figma.enum('State', { Expanded: true }),
      toggleTextExpanded: figma.enum('State', {
        Default: figma.string('Toggle Text'),
        Hover: figma.string('Toggle Text'),
        Expanded: figma.string('Toggle Text Expanded')
      }),

      children: figma.children('*')
    },
    example: (props) => (
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
