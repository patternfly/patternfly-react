import figma from '@figma/code-connect';
import { DrawerContent } from '@patternfly/react-core';

/**
 * PatternFly DrawerMain component integration for Figma Code Connect
 */

figma.connect(
  DrawerContent,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=35586-211216&m=dev',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <DrawerContent>{props.children}</DrawerContent>
  }
);
