import figma from '@figma/code-connect';
import { SimpleListGroup } from '@patternfly/react-core';

figma.connect(
  SimpleListGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4410-20708',
  {
    props: {
      children: figma.children('*')
    },
    example: (props) => (
      // Documentation for SimpleListGroup can be found at https://www.patternfly.org/components/simple-list
      <SimpleListGroup>{props.children}</SimpleListGroup>
    )
  }
);
