import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

// Documentation for Tabs can be found at https://www.patternfly.org/components/tabs

figma.connect(Tabs, 'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components?node-id=14327-6583', {
  props: {
    children: figma.children('*'),
    isBox: figma.enum('Type', {
      Boxed: true,
      'Boxed Light': true
    })
  },
  example: (props) => (
    <Tabs aria-label="Horizontal subtabs example" isSubtab={true} isBox={props.isBox} onSelect={() => {}} role="region">
      {props.children}
    </Tabs>
  )
});
