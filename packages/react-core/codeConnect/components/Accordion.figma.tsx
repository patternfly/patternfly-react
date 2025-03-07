import React from 'react';
import { Accordion, AccordionToggleText, AccordionIcon } from 'src/components/Accordion';
import figma from '@figma/code-connect';

// Type-safe mapping functions
const mapType = (figmaType: string): {
  displaySize: 'default' | 'lg';
  isBordered: boolean
} => {
  if (figmaType === 'large-bordered') {
    return { displaySize: 'lg', isBordered: true };
  } else if (figmaType === 'bordered') {
    return { displaySize: 'default', isBordered: true };
  } else {
    return { displaySize: 'default', isBordered: false };
  }
};

const mapCaret = (
  caretPosition: string
): {
  togglePosition: 'start' | 'end'
} => ({
  togglePosition: caretPosition === 'left' ? 'start' : 'end'
});

// Define Figma properties
const accordionProps = {
  type: figma.enum('Type', {
    Default: 'default',
    Bordered: 'bordered',
    'Large Bordered': 'large-bordered'
  }),
  caretPosition: figma.enum('Caret position', {
    Right: 'right',
    Left: 'left'
  })
};

figma.connect(
  Accordion,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/branch/H3LonYnwH26v9zNEa2SXFk/PatternFly-6%3A-Components?m=auto&node-id=2621-623',
  {
    props: accordionProps,
    example: (props) => {
      const { displaySize, isBordered } = mapType(props.type);
      const { togglePosition } = mapCaret(props.caretPosition);
      const isLeftCaret = props.caretPosition === 'left';

      return (
        <Accordion isBordered={isBordered} displaySize={displaySize} togglePosition={togglePosition} {...props}>
          {isLeftCaret && <AccordionIcon />}
          <AccordionToggleText />
          {!isLeftCaret && <AccordionIcon />}
        </Accordion>
      );
    }
  }
);