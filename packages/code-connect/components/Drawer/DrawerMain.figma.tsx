import figma from '@figma/code-connect';
import { DrawerContent } from '@patternfly/react-core';

// Documentation for DrawerMain can be found at https://www.patternfly.org/components/drawer

figma.connect(
  DrawerContent,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=35586-211216',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <DrawerContent>{props.children}</DrawerContent>
  }
);
