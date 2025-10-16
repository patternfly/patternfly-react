import figma from '@figma/code-connect';
import { Button } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

// Stateful Button
figma.connect(
  Button,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=5805-20130',
  {
    props: {
      state: figma.enum('Type', {
        Read: 'read',
        Unread: 'unread',
        'Unread - Needs attention': 'attention'
      }),
      icon: figma.boolean('Icon', {
        true: <BellIcon />,
        false: undefined
      }),
      count: figma.string('Value')
    },
    example: (props) => (
      <Button icon={props.icon} state={props.state} variant="stateful">
        {props.count} <span className="pf-v6-screen-reader">items</span>
      </Button>
    )
  }
);
