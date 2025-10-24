import figma from '@figma/code-connect';
import { SimpleListGroup } from '@patternfly/react-core';

// Documentation for SimpleListGroup can be found at https://www.patternfly.org/components/simple-list

figma.connect(
  SimpleListGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=4410-20708',
  {
    props: {
      simpleListItems: figma.children('Simple list item')
    },
    example: (props) => (
      <SimpleListGroup title="List group" id="<simple-list-group-id>">
        {props.simpleListItems}
      </SimpleListGroup>
    )
  }
);
