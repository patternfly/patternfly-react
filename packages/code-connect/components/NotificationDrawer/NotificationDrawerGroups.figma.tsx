import figma from '@figma/code-connect';
import { NotificationDrawerGroup, NotificationDrawerList } from '@patternfly/react-core';

// TODO: DESIGN: Split unread count into a separate prop

figma.connect(
  NotificationDrawerGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=3172-18190',
  {
    props: {
      // boolean
      hasCount: figma.boolean('Has count', {
        true: figma.string('Text'),
        false: 0
      }),

      // enum
      headingText: figma.string('Group title'),

      // string
      isExpanded: figma.enum('Type', {
        Collapsed: false,
        Expanded: true
      }),

      children: figma.children('*')
    },
    example: (props) => (
      <NotificationDrawerGroup isExpanded={props.isExpanded} count={props.hasCount} title={props.headingText}>
        <NotificationDrawerList>{props.children}</NotificationDrawerList>
      </NotificationDrawerGroup>
    )
  }
);
