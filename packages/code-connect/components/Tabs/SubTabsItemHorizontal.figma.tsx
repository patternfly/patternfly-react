import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

// Documentation for Tabs can be found at https://www.patternfly.org/components/tabs

figma.connect(
  Tabs,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=14327-6284&m=dev',
  {
    props: {
      // enum
      isBox: figma.enum('Type', {
        Boxed: true,
        'Boxed Light': true
      }),

      children: figma.children('*')
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
