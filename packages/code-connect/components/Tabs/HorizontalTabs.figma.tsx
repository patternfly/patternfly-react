import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

// Documentation for Tabs can be found at https://www.patternfly.org/components/tabs

figma.connect(Tabs, 'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=14327-6503', {
  props: {
    children: figma.children('Tab items - Horizontal'),
    isBox: figma.enum('Type', {
      Boxed: true,
      'Boxed Light': true
    }),
    inset: figma.boolean('Inset', {
      true: {
        default: 'insetMd'
      },
      false: {
        default: 'insetNone'
      }
    })
  },
  example: (props) => (
    <Tabs
      activeKey="activeTabKey"
      aria-label="Tabs example"
      inset={props.inset}
      isBox={props.isBox}
      onSelect={() => {}}
      role="region"
    >
      {props.children}
    </Tabs>
  )
});
