import React from 'react';
import { NotificationBadge, NotificationBadgeProps } from '@patternfly/react-core';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';

interface NotificationBadgeDemoState {
  isFirstRead: boolean;
  isSecondRead: boolean;
  isSecondNeedingAttention: boolean;
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
      isSecondRead: false,
      isSecondNeedingAttention: true,
      secondCount: 30
    };
    this.onFirstClick = () => {
      this.setState({
        isFirstRead: true
      });
    };
    this.onSecondClick = () => {
      this.setState({
        isSecondRead: true,
        isSecondNeedingAttention: false,
        secondCount: 0
      });
    };
  }

  render() {
    const { isFirstRead, isSecondRead, isSecondNeedingAttention, secondCount } = this.state;
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
          isRead={isSecondRead}
          isNeedingAttention={isSecondNeedingAttention}
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
