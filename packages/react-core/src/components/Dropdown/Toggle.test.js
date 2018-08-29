import React from 'react';
import { mount } from 'enzyme';
import DropdownToggle from './DropdownToggle';
import KebabToggle from './KebabToggle';

test('Dropdown toggle', () => {
  const view = mount(<DropdownToggle>Dropdown</DropdownToggle>);
  expect(view).toMatchSnapshot();
});
test('Kebab toggle', () => {
  const view = mount(<KebabToggle />);
  expect(view).toMatchSnapshot();
});
