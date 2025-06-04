import figma from '@figma/code-connect';
import { Accordion } from '@patternfly/react-core';

figma.connect(
  Accordion,
  'https://www.figma.com/file/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6%3A-Components-Test?node-id=2621-623',
  {
    props: {
      // enum
      isBordered: figma.enum('Type', {
        Bordered: true,
        'Large Bordered': true
      }),
      displaySize: figma.enum('Type', {
        'Large Bordered': 'lg'
      }),
      togglePosition: figma.enum('Caret position', {
        Left: 'start'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for Accordion can be found at https://www.patternfly.org/components/accordion
      <Accordion togglePosition={props.togglePosition} isBordered={props.isBordered} displaySize={props.displaySize}>
        {props.children}
      </Accordion>
    )
  }
);
