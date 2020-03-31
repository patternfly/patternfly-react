import React from 'react';
import { NotificationBadge, NotificationBadgeProps } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';

interface NotificationBadgeDemoState {
  isRead: boolean;
}

export class NotificationBadgeDemo extends React.Component<NotificationBadgeProps, NotificationBadgeDemoState> {
  constructor(props: {}) {
    super(props as null);
    this.state = {
      isRead: false
    };
  }
  onClick = () => {
    this.setState({
      isRead: true
    });
  };

  render() {
    const { isRead } = this.state;
    return (
      <NotificationBadge id="notification-demo-badge" isRead={isRead} onClick={this.onClick} aria-label="Notifications">
        <BellIcon />
      </NotificationBadge>
    );
  }
}
