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
      attentionVariant: 'attention'
    };
    this.onFirstClick = () => {
      this.setState({
        isFirstRead: true
      });
    };
    this.onSecondClick = () => {
      this.setState({
        attentionVariant: 'read'
      });
    };
  }

  render() {
    const { isFirstRead, attentionVariant } = this.state;
    return (
      <>
        <NotificationBadge isRead={isFirstRead} onClick={this.onFirstClick} aria-label="First notifications" />
        <br />
        <NotificationBadge variant={attentionVariant} onClick={this.onSecondClick} aria-label="Second notifications" />
      </>
    );
  }
}
```

## Examples
```js title=With-count
import React from 'react';
import { NotificationBadge } from '@patternfly/react-core';
import { BellIcon } from '@patternfly/react-icons';

class NotificationBadgeWithCount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVariant: 'unread',
      firstCount: 30,
      secondVariant: 'attention',
      secondCount: 30
    };
    this.onFirstClick = () => {
      this.setState({
        firstVariant: 'read',
      });
    };
    this.onSecondClick = () => {
      this.setState({
        secondVariant: 'read'
      });
    };
  }

  render() {
    const { firstVariant, firstCount, secondVariant, secondCount } = this.state;
    return (
      <>
        <NotificationBadge variant={firstVariant} onClick={this.onFirstClick} aria-label="First notifications" count={firstCount} />
        <br />
        <NotificationBadge variant={secondVariant} onClick={this.onSecondClick} aria-label="Second notifications" count={secondCount} />
      </>
    );
  }
}
```
