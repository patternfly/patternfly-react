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
      secondVariant: 'unread',
      thirdVariant: 'attention',
      fourthVariant: 'attention',
      secondCount: 30,
      fourthCount: 30
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
    this.onThirdClick = () => {
      this.setState({
        thirdVariant: 'read'
      });
    };
    this.onFourthClick = () => {
      this.setState({
        fourthVariant: 'read'
      });
    };
  }

  render() {
    const { isFirstRead, secondVariant, thirdVariant, fourthVariant, secondCount, thirdCount, fourthCount } = this.state;
    return (
      <>
        <NotificationBadge isRead={isFirstRead} onClick={this.onFirstClick} aria-label="First notifications">
          <BellIcon />
        </NotificationBadge>
        <br />
        <NotificationBadge variant={secondVariant} onClick={this.onSecondClick} aria-label="Second notifications" count={secondCount}>
          <BellIcon />
        </NotificationBadge>
        <br />
        <NotificationBadge variant={thirdVariant} onClick={this.onThirdClick} aria-label="Third notifications">
          <BellIcon />
        </NotificationBadge>
        <br />
        <NotificationBadge variant={fourthVariant} onClick={this.onFourthClick} aria-label="Fourth notifications" count={fourthCount}>
          <BellIcon />
        </NotificationBadge>
      </>
    );
  }
}
```
