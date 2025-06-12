import figma from '@figma/code-connect';
import { Tabs } from '@patternfly/react-core';

figma.connect(
  Tabs,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14327-6503',
  {
    props: {
      children: figma.children('*'),
      isBox: figma.enum('Type', {
        Boxed: false,
        'Boxed Light': true
      })
    },
    example: (props) => (
      // Documentation for Tabs can be found at https://www.patternfly.org/components/tabs
      <Tabs onSelect={() => {}} isBox={props.isBox} aria-label="Tabs example" role="region">
        {props.children}
      </Tabs>
    )
  }
);
