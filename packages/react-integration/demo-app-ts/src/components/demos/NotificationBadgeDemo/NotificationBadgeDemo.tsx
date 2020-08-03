import React from 'react';
import { NotificationBadge, NotificationBadgeProps, NotificationBadgeVariant } from '@patternfly/react-core';

interface NotificationBadgeDemoState {
  firstVariant: NotificationBadgeVariant | 'read' | 'unread' | 'attention';
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
      firstVariant: 'unread',
      secondVariant: 'attention',
      secondCount: 30
    };
    this.onFirstClick = () => {
      this.setState({
        firstVariant: 'read'
      });
    };
    this.onSecondClick = () => {
      this.setState({
        secondVariant: 'read'
      });
    };
  }

  render() {
    const { firstVariant, secondVariant, secondCount } = this.state;
    return (
      <>
        <NotificationBadge
          id="notification-demo-badge1"
          variant={firstVariant}
          onClick={this.onFirstClick}
          aria-label="First notifications"
        />
        <NotificationBadge
          id="notification-demo-badge2"
          variant={secondVariant}
          onClick={this.onSecondClick}
          aria-label="Second notifications"
          count={secondCount}
        />
      </>
    );
  }
}
