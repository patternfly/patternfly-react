import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

// Documentation for Button can be found at https://www.patternfly.org/components/button

figma.connect(
  Button,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=5805-20130&t=TMTA4Fpy1ljK4qQP-11',
  {
    props: {
      // boolean
      showIcon: figma.boolean('Show Icon', {
        true: <BellIcon />,
        false: undefined
      }),
      showText: figma.boolean('Show text', {
        true: figma.string('Text ✏️'),
        false: undefined
      }),

      // enum
      state: figma.enum('Type', {
        Read: 'read',
        Unread: 'unread',
        'Unread - Needs attention': 'attention'
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <Button icon={props.showIcon} state={props.state} variant="stateful">
        {props.showText}
      </Button>
    )
  }
);
