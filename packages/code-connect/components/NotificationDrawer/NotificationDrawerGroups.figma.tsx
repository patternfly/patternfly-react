import figma from '@figma/code-connect';
import { NotificationDrawerGroup, NotificationDrawerList } from '@patternfly/react-core';

// TODO: DESIGN: Split unread count into a separate prop

figma.connect(
  NotificationDrawerGroup,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3172-18190&m=dev',
  {
    props: {
      showUnreadCount: figma.boolean('Has count', {
        true: 3,
        false: NaN
      }),
      headingText: figma.string('Group title'),
      isExpanded: figma.enum('Type', {
        Collapsed: false,
        Expanded: true
      }),
      hasCount: figma.boolean('Has count', {
        true: figma.children('Badge'),
        false: undefined
      }),
      children: figma.children('*')
    },
    example: (props) => (
      <NotificationDrawerGroup isExpanded={props.isExpanded} count={props.showUnreadCount} title={props.headingText}>
        <NotificationDrawerList>{props.children}</NotificationDrawerList>
      </NotificationDrawerGroup>
    )
  }
);
