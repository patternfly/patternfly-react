---
id: Notification badge
section: components
cssPrefix: pf-c-notification-badge
propComponents: ['NotificationBadge']
---
import { BellIcon } from '@patternfly/react-icons';

## Examples
### Basic
```js
import React from 'react';
import { NotificationBadge } from '@patternfly/react-core';
import { BellIcon } from '@patternfly/react-icons';

class SimpleNotificationBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstRead: false,
      isSecondRead: false,
      isThirdRead: false,
      isThirdNeedingAttention: true,
      secondCount: 30,
      thirdCount: 30
    };
    this.onFirstClick = () => {
      this.setState({
        isFirstRead: true
      });
    };
    this.onSecondClick = () => {
      this.setState({
        isSecondRead: true,
        secondCount: 0
      });
    };
    this.onThirdClick = () => {
      this.setState({
        isThirdRead: true,
        isThirdNeedingAttention: false,
        thirdCount: 0
      });
    };
  }

  render() {
    const { isFirstRead, isSecondRead, isThirdRead, isThirdNeedingAttention, secondCount, thirdCount } = this.state;
    return (
      <>
        <NotificationBadge isRead={isFirstRead} onClick={this.onFirstClick} aria-label="First notifications">
          <BellIcon />
        </NotificationBadge>
        <NotificationBadge isRead={isSecondRead} onClick={this.onSecondClick} aria-label="Second notifications" count={secondCount}>
          <BellIcon />
        </NotificationBadge>
        <NotificationBadge isRead={isThirdRead} isNeedingAttention={isThirdNeedingAttention} onClick={this.onThirdClick} aria-label="Third notifications" count={thirdCount}>
          <BellIcon />
        </NotificationBadge>
      </>
    );
  }
}
```
