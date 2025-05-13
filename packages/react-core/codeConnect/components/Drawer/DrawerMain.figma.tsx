import figma from '@figma/code-connect';
import { DrawerContent, DrawerContentBody } from '@patternfly/react-core';

/**
 * PatternFly DrawerContent component integration for Figma Code Connect
 */

figma.connect(
  DrawerContent,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=35586-211216&m=dev',
  {
    props: {
      // enum
      isPositionEnd: figma.enum('Position', { Left: true }),

      children: figma.children('*')
    },
    example: (props) => (
      <DrawerContent>
        <DrawerContentBody panelContent={props.children} />
      </DrawerContent>
    )
  }
);
