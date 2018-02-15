/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

import ToastNotification from './ToastNotification';
import TimedToastNotification from './TimedToastNotification';
import ToastNotificationList from './ToastNotificationList';

const testToastNotificationSnapshot = (Component, props, rest) => (
  <ToastNotificationList {...rest}>
    <Component
      type="success"
      onDismiss={jest.fn()}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
      {...props}
    >
      <span>Success Will Robinson!</span>
    </Component>
  </ToastNotificationList>
);

test('ToastNotification renders properly', () => {
  const component = renderer.create(
    testToastNotificationSnapshot(ToastNotification, { type: 'error' })
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('TimedToastNotification persisted and paused renders properly', () => {
  const component = renderer.create(
    testToastNotificationSnapshot(TimedToastNotification, {
      persisted: true,
      paused: true
    })
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('TimedToastNotification expectedly sets pause', () => {
  const component = ReactTestUtils.renderIntoDocument(
    <TimedToastNotification
      type="success"
      onDismiss={jest.fn()}
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
      paused
    />
  );
  expect(component.props.paused).toBe(true);
});

test('TimedToastNotification expectedly executes mouse enter/leave and dismiss functions', () => {
  let eventCount = 0;
  const component = ReactTestUtils.renderIntoDocument(
    testToastNotificationSnapshot(TimedToastNotification, {
      type: 'info',
      persisted: true,
      onDismiss: () => eventCount++,
      onMouseEnter: () => eventCount++,
      onMouseLeave: () => eventCount++
    })
  );
  const notification = ReactTestUtils.findRenderedDOMComponentWithClass(
    component,
    'alert-info'
  );
  ReactTestUtils.Simulate.mouseEnter(notification);
  ReactTestUtils.Simulate.mouseLeave(notification);
  const close = ReactTestUtils.findRenderedDOMComponentWithTag(
    component,
    'button'
  );
  ReactTestUtils.Simulate.click(close);
  expect(eventCount).toBe(3);
});

test('ToastNotificationList expectedly executes mouse enter/leave functions', () => {
  let eventCount = 0;
  const component = ReactTestUtils.renderIntoDocument(
    testToastNotificationSnapshot(
      TimedToastNotification,
      { type: 'warning' },
      {
        onMouseEnter: () => eventCount++,
        onMouseLeave: () => eventCount++
      }
    )
  );
  const notification = ReactTestUtils.findRenderedDOMComponentWithClass(
    component,
    'toast-notifications-list-pf'
  );
  ReactTestUtils.Simulate.mouseEnter(notification);
  ReactTestUtils.Simulate.mouseLeave(notification);
  expect(eventCount).toBe(2);
});
