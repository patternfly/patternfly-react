/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import ToastNotification from './ToastNotification';
import TimedToastNotification from './TimedToastNotification';

test('ToastNotification renders properly', () => {
  const handleNotificationClose = jest.fn();
  const handleOnMouseEnter = jest.fn();
  const handleOnMouseLeave = jest.fn();
  const component = renderer.create(
    <ToastNotification
      type="danger"
      onDismiss={handleNotificationClose}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <span>Danger Will Robinson!</span>
    </ToastNotification>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('TimedToastNotification renders properly', () => {
  const handleNotificationClose = jest.fn();
  const handleOnMouseEnter = jest.fn();
  const handleOnMouseLeave = jest.fn();
  const component = renderer.create(
    <TimedToastNotification
      type="danger"
      onDismiss={handleNotificationClose}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      paused={false}
    >
      <span>Danger Will Robinson!</span>
    </TimedToastNotification>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
