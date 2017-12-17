/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import DropdownButton from './DropdownButton';
import { MenuItem } from '../MenuItem';

test('DropdownButton should renders properly', () => {
  DropdownButton.BUTTON_BS_STYLES.forEach(bsStyle => {
    const component = renderer.create(
      <DropdownButton title={bsStyle} id={`dropdown-button-test-${bsStyle}`}>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>
          Active Item
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
