import figma from '@figma/code-connect';
import { MastheadToggle } from '@patternfly/react-core';

// Documentation for MastheadToggle can be found at https://www.patternfly.org/components/masthead

figma.connect(
  MastheadToggle,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=2104-6713',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => <MastheadToggle onClick={() => {}}>{props.children}</MastheadToggle>
  }
);
