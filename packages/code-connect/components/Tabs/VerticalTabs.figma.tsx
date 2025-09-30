import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

// Documentation for Tabs can be found at https://www.patternfly.org/components/tabs

figma.connect(Tabs, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=14327-6656', {
  props: {
    // enum
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
    }),

    children: figma.children('Tab items - Vertical')
  },
  example: (props) => (
    <Tabs isBox={props.isBox} isVertical={true} onSelect={() => {}} role="region">
      {props.children}
    </Tabs>
  )
});
