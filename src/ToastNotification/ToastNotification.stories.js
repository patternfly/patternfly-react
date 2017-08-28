import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs'
import { defaultTemplate } from '../../storybook/decorators/storyTemplates'
import {
  DropdownKebab,
  MenuItem,
  ToastNotification,
  TimedToastNotification,
  ToastNotificationList
} from '../index.js'

const stories = storiesOf('ToastNotification', module)
stories.addDecorator(withKnobs)
stories.addDecorator(
  defaultTemplate({
    title: 'Toast Notification',
    documentationLink:
      'http://www.patternfly.org/pattern-library/communication/toast-notifications/'
  })
)

stories.addWithInfo(
  'Toast Notification',
  `Toast Notifications pop onto the screen to notify the user of a system occurrence`,
  () => {
    const label = text('Label', 'Great job! This is really working out.')
    const type = select(
      'Type',
      ['success', 'danger', 'warning', 'info'],
      'success'
    )
    const dismissEnabled = boolean('Dismiss', false)
    const menuEnabled = boolean('Menu', true)
    const actionEnabled = boolean('Action', true)
    return (
      <div>
        <ToastNotification
          type={type}
          onDismiss={dismissEnabled ? action('onDismiss') : null}
        >
          <span>
            {label}
          </span>

          {menuEnabled &&
            <DropdownKebab id="dropdownKebab" pullRight className="pull-right">
              <MenuItem>Action</MenuItem>
              <MenuItem>Another Action</MenuItem>
              <MenuItem>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem>Separated link</MenuItem>
            </DropdownKebab>}
          {actionEnabled &&
            <div className="pull-right toast-pf-action">
              <a href="#">Start Server</a>
            </div>}
        </ToastNotification>
      </div>
    )
  }
)

stories.addWithInfo(
  'Toast Notification List',
  `This is the Toast Notification List with a custom timer delay supplied.`,
  () =>
    <ToastNotificationList>
      <TimedToastNotification
        timerDelay={8000}
        type="info"
        onDismiss={action('info notification: onDismiss fired')}
        onMouseEnter={action('info notification: onMouseEnter fired')}
        onMouseLeave={action('info notification: onMouseLeave fired')}
      >
        <span>
          {text(
            'Label',
            "By default, a toast notification's timer expires after eight seconds."
          )}
        </span>
      </TimedToastNotification>
      <br />
      <TimedToastNotification
        timerDelay={8000}
        type="warning"
        onDismiss={action('warning notification: onDismiss fired')}
        onMouseEnter={action('warning notification: onMouseEnter fired')}
        onMouseLeave={action('warning notification: onMouseLeave fired')}
      >
        <span>
          Additionally, if the user hovers a toast notification its timer is
          reset.
        </span>
      </TimedToastNotification>
      <TimedToastNotification
        sticky
        type="success"
        onDismiss={action('warning notification: onDismiss fired')}
      >
        <span>
          If a notification is marked sticky it will persist endlessly until
          closed.
        </span>
      </TimedToastNotification>
    </ToastNotificationList>
)
