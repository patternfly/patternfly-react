/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Alert from './Alert';
import { ALERT_TYPES, DEPRECATED_ALERT_TYPES } from './AlertConstants';

const ALL_ALERT_TYPES = [...ALERT_TYPES, ...DEPRECATED_ALERT_TYPES];

const testAlertSnapshot = (type, onDismiss) => {
  const component = renderer.create(
    <Alert type={type} onDismiss={onDismiss}>
      <span>Alert Message!</span>
    </Alert>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
};

ALL_ALERT_TYPES.forEach(type => {
  beforeAll(() => jest.spyOn(console, 'warn').mockImplementation(() => {}));
  afterAll(() => {
    // eslint-disable-next-line no-console
    console.warn.mockRestore();
  });

  test(`Alert ${type} renders properly`, () => {
    testAlertSnapshot(type);
  });

  test(`Alert ${type} renders properly with dismiss button`, () => {
    testAlertSnapshot(type, jest.fn());
  });
});
