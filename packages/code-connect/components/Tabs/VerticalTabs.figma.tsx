import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

// Documentation for Tabs can be found at https://www.patternfly.org/components/tabs

figma.connect(
  Tabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6656',
  {
    props: {
      children: figma.children('*'),
      isExpandable: figma.enum('Type', {
        Expandable: {
          default: 'expandable'
        },
        false: undefined
      }),
      isBox: figma.enum('Type', {
        Boxed: true,
        'Boxed Light': true
      }),
      inset: figma.enum('Type', {
        Inset: { default: 'insetMd' },
        'Inset Boxed': { default: 'insetMd' }
      })
    },
    example: (props) => (
      <Tabs isBox={props.isBox} isVertical={true} onSelect={() => {}} role="region">
        {props.children}
      </Tabs>
    )
  }
);
