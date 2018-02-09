/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import FieldLevelHelp from './FieldLevelHelp';

test('FieldLevelHelp renders properly', () => {
  const component = renderer.create(
    <FieldLevelHelp id="fieldlevelname1">Port Number</FieldLevelHelp>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('FieldLevelHelp allows to specify mode content and close', () => {
  const component = renderer.create(
    <div>
      <label>Port Number</label>
      <FieldLevelHelp
        id="fieldlevelname1"
        mode="popover"
        content="Enter Port number between the 4000-5000 range"
        close="true"
      />
    </div>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
