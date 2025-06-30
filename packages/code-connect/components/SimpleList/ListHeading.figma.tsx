import figma from '@figma/code-connect';
import { SimpleListGroup } from '@patternfly/react-core';

// TODO: DESIGN: Create list group title component
// Documentation for ListHeading can be found at https://www.patternfly.org/components/simple-list

figma.connect(
  SimpleListGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4410-20689&m=dev',
  {
    props: {
      listGroupTitle: 'List group title',
      children: figma.children('*')
    },
    example: (props) => (
      <SimpleListGroup title={props.listGroupTitle} id="<group-id>">
        {props.children}
      </SimpleListGroup>
    )
  }
);
