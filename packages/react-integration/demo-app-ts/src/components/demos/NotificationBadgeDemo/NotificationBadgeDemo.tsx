import React from 'react';
import { NotificationBadge, NotificationBadgeProps, NotificationBadgeVariant } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

interface NotificationBadgeDemoState {
  isFirstRead: boolean;
  secondVariant: NotificationBadgeVariant | 'read' | 'unread' | 'attention';
  secondCount: number;
}

export class NotificationBadgeDemo extends React.Component<NotificationBadgeProps, NotificationBadgeDemoState> {
  static displayName = 'NotificationBadgeDemo';
  onFirstClick: () => void;
  onSecondClick: () => void;

  constructor(props: NotificationBadgeProps) {
    super(props);
    this.state = {
      isFirstRead: false,
      secondVariant: 'attention',
      secondCount: 30
    };
    this.onFirstClick = () => {
      this.setState({
        isFirstRead: true
      });
    };
    this.onSecondClick = () => {
      this.setState({
        secondVariant: 'read'
      });
    };
  }

  render() {
    const { isFirstRead, secondVariant, secondCount } = this.state;
    return (
      <>
        <NotificationBadge
          id="notification-demo-badge1"
          isRead={isFirstRead}
          onClick={this.onFirstClick}
          aria-label="First notifications"
        >
          <BellIcon />
        </NotificationBadge>
        <NotificationBadge
          id="notification-demo-badge2"
          variant={secondVariant}
          onClick={this.onSecondClick}
          aria-label="Second notifications"
          count={secondCount}
        >
          <BellIcon />
        </NotificationBadge>
      </>
    );
  }
}
