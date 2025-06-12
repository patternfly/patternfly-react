import figma from '@figma/code-connect';
import {
  NotificationDrawerListItem,
  NotificationDrawerListItemBody,
  NotificationDrawerListItemHeader
} from '@patternfly/react-core';

figma.connect(
  NotificationDrawerListItem,
  'https://www.figma.com/design/aEBBvq0J3EPXxHvv6WgDx9/PatternFly-6--Components-Test?node-id=3164-16861&m=dev',
  {
    props: {
      isRead: figma.enum('Type', {
        Unread: false,
        Read: true
      }),
      isHoverable: figma.enum('State', {
        Default: false,
        Hover: true
      }),
      status: figma.enum('Status', {
        Info: 'info',
        Success: 'success',
        Warning: 'warning',
        Danger: 'danger'
      }),
      alertTitle: figma.children('Alert title'),
      alertDescription: figma.children('Description')
    },
    example: (props) => (
      <NotificationDrawerListItem isHoverable={props.isHoverable} isRead={props.isRead} variant={props.status}>
        <NotificationDrawerListItemHeader title="Notification" srTitle="Notification drawer item">
          {props.alertTitle}
        </NotificationDrawerListItemHeader>
        <NotificationDrawerListItemBody>{props.alertDescription}</NotificationDrawerListItemBody>
      </NotificationDrawerListItem>
    )
  }
);
