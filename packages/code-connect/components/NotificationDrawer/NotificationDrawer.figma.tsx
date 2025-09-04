import figma from '@figma/code-connect';
import { NotificationDrawer, NotificationDrawerBody, NotificationDrawerList } from '@patternfly/react-core';

figma.connect(
  NotificationDrawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=7172-99015',
  {
    props: {
      // children
      notificationDrawerHeader: figma.children('Notification drawer header'),
      notificationDrawerGroup: figma.children('Notification drawer group'),
      notificationDrawerNotifications: figma.children(['Notifications', 'Notification drawer item'])
    },
    example: (props) => (
      // Documentation for NotificationDrawer can be found at https://www.patternfly.org/components/notification-drawer
      <NotificationDrawer>
        {props.notificationDrawerHeader}
        <NotificationDrawerBody>
          {props.notificationDrawerGroup}
          <NotificationDrawerList>{props.notificationDrawerNotifications}</NotificationDrawerList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    )
  }
);
