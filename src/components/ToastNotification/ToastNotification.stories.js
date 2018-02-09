import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { inlineTemplate } from '../../../storybook/decorators/storyTemplates';
import { DOCUMENTATION_URL } from '../../../storybook/constants';
import { Button } from '../Button';
import { DropdownKebab } from '../DropdownKebab';
import { MenuItem } from '../MenuItem';
import {
  ToastNotification,
  TimedToastNotification,
  ToastNotificationList
} from './index';

const stories = storiesOf('ToastNotification', module);
stories.addDecorator(withKnobs);

stories.addWithInfo(
  'Toast Notification',
  `Toast Notifications pop onto the screen to notify the user of a system occurrence`,
  () => {
    const header = text('Header', 'Great job!');
    const message = text('Message', 'This is really working out.');
    const type = select(
      'Type',
      ToastNotification.TOAST_NOTIFICATION_TYPES,
      'success'
    );
    const dismissEnabled = boolean('Dismiss', false);
    const menuEnabled = boolean('Menu', true);
    const actionEnabled = boolean('Action', true);

    const story = (
      <div>
        <ToastNotification
          type={type}
          onDismiss={
            dismissEnabled && !menuEnabled ? action('onDismiss') : null
          }
        >
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
      </div>
    );

    return inlineTemplate({
      title: 'Toast Notification',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
      }toast-notifications/`,
      story
    });
  }
);

class ToastNotificationStoryWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoNotificationDismissed: false,
      warningNotificationDismissed: false,
      successNotificationDismissed: false
    };

    this.infoNotificationDismissed = () => {
      action('info notification: onDismiss fired')();
      this.setState({ infoNotificationDismissed: true });
    };

    this.warningNotificationDismissed = () => {
      action('warning notification: onDismiss fired')();
      this.setState({ warningNotificationDismissed: true });
    };

    this.persistentNotificationDismissed = () => {
      action('persistent notification: onDismiss fired')();
      this.setState({ persistentNotificationDismissed: true });
    };

    this.resetStateClicked = () => {
      this.setState({
        infoNotificationDismissed: false,
        warningNotificationDismissed: false,
        persistentNotificationDismissed: false
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
        >
          {!this.state.infoNotificationDismissed && (
            <TimedToastNotification
              timerdelay={8000}
              type="info"
              onDismiss={this.infoNotificationDismissed}
              onMouseEnter={action('info notification: onMouseEnter fired')}
              onMouseLeave={action('info notification: onMouseLeave fired')}
            >
              <span>
                {text(
                  'Message',
                  "By default, a toast notification's timer expires after eight seconds."
                )}
              </span>
            </TimedToastNotification>
          )}
          <br />
          {!this.state.warningNotificationDismissed && (
            <TimedToastNotification
              timerdelay={8000}
              type="warning"
              onDismiss={this.warningNotificationDismissed}
              onMouseEnter={action('warning notification: onMouseEnter fired')}
              onMouseLeave={action('warning notification: onMouseLeave fired')}
            >
              <span>
                Additionally, if the user hovers any toast notification each
                timer is reset.
              </span>
            </TimedToastNotification>
          )}
          {!this.state.persistentNotificationDismissed && (
            <TimedToastNotification
              persistent
              type="success"
              onDismiss={this.persistentNotificationDismissed}
              onMouseEnter={action(
                'persistent notification: onMouseEnter fired'
              )}
              onMouseLeave={action(
                'persistent notification: onMouseLeave fired'
              )}
            >
              <span>
                A persistent notification will remain on the screen until
                closed.
              </span>
            </TimedToastNotification>
          )}
        </ToastNotificationList>
      </div>
    );
  }
}

stories.addWithInfo(
  'Toast Notification List',
  `This is the Toast Notification List with a custom timer delay supplied.`,
  () => {
    const story = <ToastNotificationStoryWrapper />;
    return inlineTemplate({
      title: 'Toast Notification List',
      documentationLink: `${
        DOCUMENTATION_URL.PATTERNFLY_ORG_COMMUNICATION
      }toast-notifications/`,
      story
    });
  }
);
