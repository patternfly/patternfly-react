/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import ToastNotification from './ToastNotification';
import TimedToastNotification from './TimedToastNotification';

const testToastNotificationSnapshot = Component => {
  const handleNotificationClose = jest.fn();
  const handleOnMouseEnter = jest.fn();
  const handleOnMouseLeave = jest.fn();
  const component = renderer.create(
    <Component
      type="error"
      onDismiss={handleNotificationClose}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <span>Danger Will Robinson!</span>
    </Component>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
};

test('ToastNotification renders properly', () => {
  testToastNotificationSnapshot(ToastNotification);
});

test('TimedToastNotification renders properly', () => {
  testToastNotificationSnapshot(TimedToastNotification);
});
