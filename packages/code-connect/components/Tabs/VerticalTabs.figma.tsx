import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

figma.connect(
  Tabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6656',
  {
    props: {
      children: figma.children('*'),
      isBox: figma.enum('Type', {
        Boxed: true,
        'Boxed Light': true,
        'Inset Boxed': true
      }),
      inset: figma.enum('Type', {
        Inset: { default: 'insetMd' },
        'Inset Boxed': { default: 'insetMd' }
      })
    },
    example: (props) => (
      // Documentation for Tabs can be found at https://www.patternfly.org/components/tabs
      <Tabs isBox={props.isBox} isVertical={true} inset={props.inset} onSelect={() => {}} role="region">
        {props.children}
      </Tabs>
    )
  }
);
