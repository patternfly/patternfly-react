import figma from '@figma/code-connect';
import { NotificationDrawerGroup, NotificationDrawerList } from '@patternfly/react-core';

// TODO: DESIGN: Split unread count into a separate prop

figma.connect(
  NotificationDrawerGroup,
  'https://www.figma.com/design/VMEX8Xg2nzhBX8rfBx53jp/PatternFly-6--Components?node-id=3172-18190',
  {
    props: {
      // string
      headingText: figma.string('Group title'),
      count: 3,

      // boolean
      badgeProps: figma.boolean('Has count', {
        true: figma.nestedProps('Badge', {
          count: figma.string('Text')
        }),
        false: { count: undefined }
      }),

      // enum
      isExpanded: figma.enum('Type', {
        Collapsed: false,
        Expanded: true
      }),

      children: figma.children('Notification drawer item')
    },
    example: (props) => (
      <NotificationDrawerGroup
        title={props.headingText}
        isExpanded={props.isExpanded}
        count={props.badgeProps.count}
        onExpand={() => {}}
      >
        <NotificationDrawerList>{props.children}</NotificationDrawerList>
      </NotificationDrawerGroup>
    )
  }
);
