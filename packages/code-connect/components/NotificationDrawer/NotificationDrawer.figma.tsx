import figma from '@figma/code-connect';
import {
  NotificationDrawer,
  NotificationDrawerBody,
  NotificationDrawerGroupList,
  NotificationDrawerList
} from '@patternfly/react-core';

figma.connect(
  NotificationDrawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components?node-id=7172-99015',
  {
    variant: { Type: 'Grouped' },
    props: {
      // children
      notificationDrawerHeader: figma.children('Notification drawer header'),
      notificationDrawerGroup: figma.children('Notification drawer groups')
    },
    example: (props) => (
      // Documentation for NotificationDrawer can be found at https://www.patternfly.org/components/notification-drawer
      <NotificationDrawer>
        {props.notificationDrawerHeader}
        <NotificationDrawerBody>
          <NotificationDrawerGroupList>{props.notificationDrawerGroup}</NotificationDrawerGroupList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    )
  }
);

figma.connect(
  NotificationDrawer,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components?node-id=7172-99015',
  {
    props: {
      // children
      notificationDrawerHeader: figma.children('Notification drawer header'),
      notificationDrawerItems: figma.children(['Notifications', 'Notification drawer item'])
    },
    example: (props) => (
      // Documentation for NotificationDrawer can be found at https://www.patternfly.org/components/notification-drawer
      <NotificationDrawer>
        {props.notificationDrawerHeader}
        <NotificationDrawerBody>
          <NotificationDrawerList>{props.notificationDrawerItems}</NotificationDrawerList>
        </NotificationDrawerBody>
      </NotificationDrawer>
    )
  }
);
