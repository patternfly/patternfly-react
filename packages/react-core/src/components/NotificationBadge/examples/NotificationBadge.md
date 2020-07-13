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
import { NotificationBadge } from '@patternfly/react-core';
import { BellIcon } from '@patternfly/react-icons';

class SimpleNotificationBadge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRead: false
    };
    this.onClick = () => {
      this.setState({
        isRead: true
      });
    };
  }

  render() {
    const { isRead } = this.state;
    return (
      <NotificationBadge isRead={isRead} onClick={this.onClick} aria-label="Notifications">
        <BellIcon />
      </NotificationBadge>
    );
  }
}
```
