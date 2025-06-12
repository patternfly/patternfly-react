import { NotificationDrawerHeader } from '@patternfly/react-core';
import figma from '@figma/code-connect';

figma.connect(
  NotificationDrawerHeader,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3170-17841&m=dev',
  {
    props: {
      showUnreadCount: figma.boolean('Show unread count', {
        true: 3,
        false: NaN
      }),
      hasActionsMenu: figma.boolean('Has actions menu'),
      unreadCount: figma.string('Unread count'),
      headingText: figma.string('Heading text'),
      children: figma.children('*')
    },
    example: (props) => (
      <NotificationDrawerHeader count={props.showUnreadCount} title={props.headingText}>
        {props.children}
      </NotificationDrawerHeader>
    )
  }
);
