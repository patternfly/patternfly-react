import figma from '@figma/code-connect';
import { SimpleListItem } from '@patternfly/react-core';

// TODO: DESIGN: Add support for SimpleListGroup
// Documentation for SimpleListItem can be found at https://www.patternfly.org/components/simple-list

figma.connect(
  SimpleListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=4410-20664',
  {
    props: {
      text: figma.string('Text'),

      // enum
      isActive: figma.enum('State', {
        'Selected - Light': true,
        'Selected - Dark': true
      }),
      isLink: figma.enum('Type', {
        Default: {
          component: undefined,
          href: undefined
        },
        Link: {
          component: 'a',
          href: '#'
        }
      })
    },
    example: (props) => (
      <SimpleListItem
        component={props.isLink.component}
        href={props.isLink.href}
        isActive={props.isActive}
        key="simple-list-item-key"
      >
        {props.text}
      </SimpleListItem>
    )
  }
);
