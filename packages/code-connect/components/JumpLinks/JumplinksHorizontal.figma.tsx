import figma from '@figma/code-connect';
import { JumpLinks } from '@patternfly/react-core';

// Documentation for JumpLinks can be found at https://www.patternfly.org/components/jump-links

figma.connect(
  JumpLinks,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=8644-150823',
  {
    props: {
      // boolean
      label: figma.boolean('Show label', {
        true: 'Jump to section',
        false: undefined
      }),

      children: figma.children('*')
    },
    example: (props) => <JumpLinks label={props.label}>{props.children}</JumpLinks>
  }
);
