import figma from '@figma/code-connect';
import { SimpleListItem } from '@patternfly/react-core';

// Documentation for SimpleListItem can be found at https://www.patternfly.org/components/simple-list

figma.connect(
  SimpleListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4410-20664',
  {
    props: {
      text: figma.string('Text'),
      state: figma.enum('State', {
        Default: undefined,
        'Hover - Light': 'hover---light',
        'Hover - Dark': 'hover---dark',
        'Selected - Light': 'selected---light',
        'Selected - Dark': 'selected---dark',
        Disabled: 'disabled'
      }),
      type: figma.enum('Type', {
        Default: undefined,
        Link: 'link'
      })
    },
    example: (props) => <SimpleListItem>{props.text}</SimpleListItem>
  }
);
