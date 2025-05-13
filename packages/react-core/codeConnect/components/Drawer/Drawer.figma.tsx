import figma from '@figma/code-connect';
import { Drawer } from '@patternfly/react-core';

/**
 * PatternFly Drawer component integration for Figma Code Connect
 */

figma.connect(
  Drawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8034-7676&t=IzSunfrnw18ti37Y-11',
  {
    props: {
      // boolean
      isExpanded: figma.boolean('Show Footer actions'),
      isInline: figma.boolean('Has tabs'),
      isResizable: figma.boolean('Is resizable'),
      isStatic: figma.boolean('Has action icon'),

      // enum
      position: figma.enum('Position', {
        'Right - In Main Content Area': 'end',
        'Left - Full Page': 'start',
        'Bottom - Full page': 'bottom',
        'Right - Full page': 'end',
        'Bottom - In Main Content Area': 'bottom',
        'Left - In Main Content Area': 'start'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Drawer
        isExpanded={props.isExpanded}
        isInline={props.isInline}
        isStatic={props.isStatic}
        position={props.position}
      >
        {props.children}
      </Drawer>
    )
  }
);
