import figma from '@figma/code-connect';
import { DrawerContent, DrawerContentBody } from '@patternfly/react-core';

/**
 * PatternFly DrawerMain component integration for Figma Code Connect
 * @see https://www.patternfly.org/components/drawer#drawer-sections
 */

figma.connect(
  DrawerContent,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=35586-211216&m=dev',
  {
    props: {
      // String
      isPositionEnd: figma.enum('Position', {
        Left: true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <DrawerContent>
        <DrawerContentBody panelContent={props.children} />
      </DrawerContent>
    )
  }
);
