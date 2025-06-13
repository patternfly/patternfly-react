import figma from '@figma/code-connect';
import { SimpleList } from '@patternfly/react-core';

figma.connect(
  SimpleList,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4410-20691',
  {
    props: {
      children: figma.children(['Simple list group', 'Simple list item'])
    },
    example: (props) => (
      // Documentation for SimpleList can be found at https://www.patternfly.org/components/simple-list
      <SimpleList aria-label="Simple list example">{props.children}</SimpleList>
    )
  }
);
