/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';

import SplitButton from './SplitButton';
import { MenuItem } from '../MenuItem';

test('SplitButton should renders properly', () => {
  SplitButton.BUTTON_BS_STYLES.forEach(bsStyle => {
    const component = renderer.create(
      <SplitButton title={bsStyle} id={`dropdown-button-test-${bsStyle}`}>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3" active>
          Active Item
        </MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </SplitButton>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
