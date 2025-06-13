import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

figma.connect(
  Tabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6583&m=dev',
  {
    props: {
      children: figma.children('*'),
      isBox: figma.enum('Type', {
        Boxed: false,
        'Boxed Light': true
      })
    },
    example: (props) => (
      <Tabs
        aria-label="Horizontal subtabs example"
        isSubtab={true}
        isBox={props.isBox}
        onSelect={() => {}}
        role="region"
      >
        {props.children}
      </Tabs>
    )
  }
);
