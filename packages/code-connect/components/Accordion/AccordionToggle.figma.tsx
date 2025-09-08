import figma from '@figma/code-connect';
import { AccordionItem, AccordionToggle, AccordionContent } from '@patternfly/react-core';

// Documentation for AccordionToggle can be found at https://www.patternfly.org/components/accordion
// Note: Adding on onClick event is recommended to initialize AccordionToggle

figma.connect(
  AccordionToggle,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=1423-687',
  {
    props: {
      // string
      expandedContentText: figma.string('Expanded content text'),
      expandedToggleText: figma.string('Expanded toggle text'),
      toggleText: figma.string('Toggle text'),

      // enum
      isExpanded: figma.enum('State', { Expanded: true })
    },
    example: (props) => (
      <AccordionItem isExpanded={props.isExpanded}>
        <AccordionToggle onClick={() => {}} id="<your-id>">
          {props.expandedToggleText}
        </AccordionToggle>
        <AccordionContent id="accordion-content-example">
          <p>{props.expandedContentText}</p>
        </AccordionContent>
      </AccordionItem>
    )
  }
);
