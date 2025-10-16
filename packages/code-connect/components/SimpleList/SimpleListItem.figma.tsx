import figma from '@figma/code-connect';
import { SimpleListItem } from '@patternfly/react-core';

// TODO: DESIGN: Add support for SimpleListGroup
// Documentation for SimpleListItem can be found at https://www.patternfly.org/components/simple-list

figma.connect(
  SimpleListItem,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=4410-20664',
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
      <SimpleListItem component={props.isLink.component} href={props.isLink.href} isActive={props.isActive}>
        {props.text}
      </SimpleListItem>
    )
  }
);
