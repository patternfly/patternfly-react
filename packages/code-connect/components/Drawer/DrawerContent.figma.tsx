import figma from '@figma/code-connect';
import { DrawerContent } from '@patternfly/react-core';

figma.connect(
  DrawerContent,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=35627-47890&m=dev',
  {
    props: {
      panelContent: figma.children('*')
    },
    example: (props) => (
      // Documentation for DrawerContent can be found at https://www.patternfly.org/components/drawer
      <DrawerContent panelContent={props.panelContent} />
    )
  }
);
