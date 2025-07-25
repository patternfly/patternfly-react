import figma from '@figma/code-connect';
import { Accordion } from '@patternfly/react-core';

// Documentation for Accordion can be found at https://www.patternfly.org/components/accordion

figma.connect(
  Accordion,
  'https://www.figma.com/file/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2621-623',
  {
    props: {
      // enum
      displaySize: figma.enum('Type', { 'Large Bordered': 'lg' }),
      isBordered: figma.enum('Type', {
        Bordered: true,
        'Large Bordered': true
      }),
      togglePosition: figma.enum('Caret position', { Left: 'start' }),

      children: figma.children('Accordion toggle')
    },
    example: (props) => (
      <Accordion togglePosition={props.togglePosition} isBordered={props.isBordered} displaySize={props.displaySize}>
        {props.children}
      </Accordion>
    )
  }
);
