import { MenuItem } from 'react-bootstrap';
import React from 'react';
import { shallow } from 'enzyme';

import DropdownKebab from './DropdownKebab';

test('Kebab dropdown renders properly', () => {
  const component = shallow(
    <DropdownKebab id="myKebab">
      <MenuItem>Action</MenuItem>
      <MenuItem>Another Action</MenuItem>
      <MenuItem>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem>Separated link</MenuItem>
    </DropdownKebab>
  );

  expect(component).toMatchSnapshot();
});
