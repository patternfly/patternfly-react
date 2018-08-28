import React from 'react';
import { mount } from 'enzyme';

import ToastNotification from './ToastNotification';
import TimedToastNotification from './TimedToastNotification';
import ToastNotificationList from './ToastNotificationList';

const testToastNotificationSnapshot = (Component, props, notificationProps) => (
  <ToastNotificationList {...notificationProps}>
    <Component type="success" onDismiss={jest.fn()} onMouseEnter={jest.fn()} onMouseLeave={jest.fn()} {...props}>
      <span>Success Will Robinson!</span>
    </Component>
  </ToastNotificationList>
);

test('ToastNotification renders properly', () => {
  const component = mount(testToastNotificationSnapshot(ToastNotification, { type: 'error' }));

  expect(component.render()).toMatchSnapshot();
});

test('TimedToastNotification persisted and paused renders properly', () => {
  const component = mount(
    testToastNotificationSnapshot(TimedToastNotification, {
      persisted: true,
      paused: true
    })
  );

  expect(component.render()).toMatchSnapshot();
});

test('TimedToastNotification expectedly sets pause', () => {
  const component = mount(
    <TimedToastNotification
      type="success"
      onDismiss={jest.fn()}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
      paused
    />
  );

  expect(component.props().paused).toBe(true);
});

test('TimedToastNotification expectedly executes mouse enter/leave and dismiss functions', () => {
  let eventCount = 0;
  const component = mount(
    testToastNotificationSnapshot(TimedToastNotification, {
      type: 'info',
      persisted: true,
      onDismiss: () => eventCount++,
      onMouseEnter: () => eventCount++,
      onMouseLeave: () => eventCount++
    })
  );
  const notification = component.find('.alert-info');
  const close = component.find('button');
  notification.simulate('mouseEnter');
  notification.simulate('mouseLeave');
  close.simulate('click');

  expect(eventCount).toBe(3);
});

test('ToastNotificationList expectedly executes mouse enter/leave/over functions', () => {
  let eventCount = 0;
  const component = mount(
    testToastNotificationSnapshot(
      TimedToastNotification,
      { type: 'warning' },
      {
        onMouseEnter: () => eventCount++,
        onMouseLeave: () => eventCount++,
        onMouseOver: () => eventCount++
      }
    )
  );
  const notification = component.find('.toast-notifications-list-pf');
  notification.simulate('mouseEnter');
  notification.simulate('mouseLeave');
  notification.simulate('mouseOver');

  expect(eventCount).toBe(3);
});
