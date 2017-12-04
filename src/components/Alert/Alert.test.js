/* eslint-env jest */

import React from 'react';
import Alert from './Alert';
import renderer from 'react-test-renderer';

test('Alert renders properly', () => {
  const handleAlertClose = jest.fn();
  const component = renderer.create(
    <Alert type="danger" onDismiss={handleAlertClose}>
      <span>Danger Will Robinson!</span>
    </Alert>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
