/* eslint-env jest */

import React from 'react';
import Alert from './Alert';
import renderer from 'react-test-renderer';

const testAlertSnapshot = (type, onDismiss) => {
  const component = renderer.create(
    <Alert type={type} onDismiss={onDismiss}>
      <span>Alert Message!</span>
    </Alert>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
};

Alert.ALERT_TYPES.forEach(type => {
  test(`Alert ${type} renders properly`, () => {
    testAlertSnapshot(type);
  });

  test(`Alert ${type} renders properly with dismiss button`, () => {
    testAlertSnapshot(type, jest.fn());
  });
});
