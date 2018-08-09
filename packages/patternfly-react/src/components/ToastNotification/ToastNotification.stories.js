import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { inlineTemplate } from 'storybook/decorators/storyTemplates';
import { storybookPackageName, DOCUMENTATION_URL, STORYBOOK_CATEGORY } from 'storybook/constants/siteConstants';
import { Button } from '../Button';
import { DropdownKebab } from '../DropdownKebab';
import { MenuItem } from '../MenuItem';
import { ToastNotification, TimedToastNotification, ToastNotificationList } from './index';
import { name } from '../../../package.json';

const stories = storiesOf(
  `${storybookPackageName(name)}/${STORYBOOK_CATEGORY.COMMUNICATION}/Toast Notifications`,
  module
);
stories.addDecorator(withKnobs);

stories.add(
  'Toast Notification',
  withInfo(`Toast Notifications pop onto the screen to notify the user of a system occurrence`)(() => {
    const header = text('Header', 'Great job!');
    const message = text('Message', 'This is really working out.');
    const type = select('Type', ToastNotification.TOAST_NOTIFICATION_TYPES, 'success');
    const dismissEnabled = boolean('Dismiss', false);
    const menuEnabled = boolean('Menu', true);
    const actionEnabled = boolean('Action', true);

    const story = (
      <ToastNotificationList>
        <ToastNotification type={type} onDismiss={dismissEnabled && !menuEnabled ? action('onDismiss') : null}>
          {menuEnabled && (
            <DropdownKebab id="dropdownKebab" pullRight className="pull-right">
              <MenuItem>Action</MenuItem>
              <MenuItem>Another Action</MenuItem>
              <MenuItem>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem>Separated link</MenuItem>
              {dismissEnabled && <MenuItem>Close</MenuItem>}
            </DropdownKebab>
          )}
          {actionEnabled && (
            <div className="pull-right toast-pf-action">
              <a href="#">Start Server</a>
            </div>
          )}
          <span>
            <strong>{header}</strong> &nbsp;
            {message}
          </span>
        </ToastNotification>
      </ToastNotificationList>
    );

    return inlineTemplate({
      title: 'Toast Notification',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}toast-notifications/`,
      story
    });
  })
);

class ToastNotificationStoryWrapper extends React.Component {
  constructor(props) {
    super(props);
    const notificationList = [
      {
        key: 1,
        type: 'info',
        persistent: false,
        timerdelay: 8000,
        message: `By default, a toast notification's timer expires after eight seconds.`
      },
      {
        key: 2,
        type: 'warning',
        persistent: false,
        message: `Additionally, if the user hovers any toast notification each timer is reset.`
      }
    ];

    this.state = {
      notifications: notificationList,
      persistentNotificationDismissed: false
    };

    this.persistentNotificationDismissed = () => {
      action('persistent notification: onDismiss fired')();
      this.setState({ persistentNotificationDismissed: true });
    };

    this.resetStateClicked = () => {
      this.setState({
        notifications: notificationList,
        persistentNotificationDismissed: false
      });
    };

    this.removeNotificationAction = notificationToRemove => {
      action(`${notificationToRemove.type} notification: onDismiss fired`)();
      this.setState({
        notifications: this.state.notifications.filter(notification => notificationToRemove.key !== notification.key)
      });
    };
  }

  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.resetStateClicked}>
          Reset Notification State
        </Button>
        <ToastNotificationList
          onMouseEnter={action('notification list: onMouseEnter fired')}
          onMouseLeave={action('notification list: onMouseLeave fired')}
          onMouseOver={action('notification list: onMouseOver fired')}
          onFocus={action('notification list: onFocus fired')}
        >
          {this.state.notifications.map(notification => (
            <TimedToastNotification
              key={notification.key}
              type={notification.type}
              persistent={notification.persistent}
              onDismiss={() => this.removeNotificationAction(notification)}
              timerdelay={notification.timerdelay}
            >
              <span>
                {notification.header && <strong>{notification.header}</strong>}
                {notification.message}
              </span>
            </TimedToastNotification>
          ))}
          {!this.state.persistentNotificationDismissed && (
            <TimedToastNotification
              persistent
              type="success"
              onDismiss={this.persistentNotificationDismissed}
              onMouseEnter={action('persistent notification: onMouseEnter fired')}
              onMouseLeave={action('persistent notification: onMouseLeave fired')}
            >
              <span>A persistent notification will remain on the screen until closed.</span>
            </TimedToastNotification>
          )}
        </ToastNotificationList>
      </div>
    );
  }
}

stories.add(
  'Toast Notification List',
  withInfo(`This is the Toast Notification List with a custom timer delay supplied.`)(() => {
    const story = <ToastNotificationStoryWrapper />;
    return inlineTemplate({
      title: 'Toast Notification List',
      documentationLink: `${DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION}toast-notifications/`,
      story
    });
  })
);
