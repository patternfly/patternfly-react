import figma from '@figma/code-connect';
import { Accordion } from '@patternfly/react-core';

// Documentation for Accordion can be found at https://www.patternfly.org/components/accordion

figma.connect(
  Accordion,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=2621-623',
  {
    props: {
      // enum
      displaySize: figma.enum('Type', { 'Large bordered': 'lg' }),
      isBordered: figma.enum('Type', {
        Bordered: true,
        'Large bordered': true
      }),
      togglePosition: figma.enum('Caret position', { 'At start': 'start' }),

      children: figma.children('Accordion toggle')
    },
    example: (props) => (
      <Accordion isBordered={props.isBordered} displaySize={props.displaySize} togglePosition={props.togglePosition}>
        {props.children}
      </Accordion>
    )
  }
);
