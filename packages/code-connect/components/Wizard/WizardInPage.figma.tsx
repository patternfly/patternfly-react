import figma from '@figma/code-connect';
import { Wizard } from '@patternfly/react-core';

// TODO: FIGMA: Update left panel to a semantic name or component
// TODO: FIGMA: Add 'Wizard step content' prop to Wizard Step Item
// Documentation for Wizard can be found at https://www.patternfly.org/components/wizard

figma.connect(
  Wizard,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=14628-23799',
  {
    props: {
      children: figma.children('Wizard step item')
    },
    example: (props) => <Wizard>{props.children}</Wizard>
  }
);
