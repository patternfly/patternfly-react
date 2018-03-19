/* eslint-env jest */

import { MenuItem } from 'react-bootstrap';
import React from 'react';
import renderer from 'react-test-renderer';

import DropdownKebab from './DropdownKebab';

test('Kebab dropdown renders properly', () => {
  const component = renderer.create(
    <DropdownKebab id="myKebab">
      <MenuItem>Action</MenuItem>
      <MenuItem>Another Action</MenuItem>
      <MenuItem>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
    </DropdownKebab>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
