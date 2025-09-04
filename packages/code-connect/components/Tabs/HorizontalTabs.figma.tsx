import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

// Documentation for Tabs can be found at https://www.patternfly.org/components/tabs

figma.connect(
  Tabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6503',
  {
    props: {
      children: figma.children('*'),
      isBox: figma.enum('Type', {
        Boxed: true,
        'Boxed Light': true
      })
    },
    example: (props) => (
      <Tabs activeKey="activeTabKey" aria-label="Tabs example" isBox={props.isBox} onSelect={() => {}} role="region">
        {props.children}
      </Tabs>
    )
  }
);
