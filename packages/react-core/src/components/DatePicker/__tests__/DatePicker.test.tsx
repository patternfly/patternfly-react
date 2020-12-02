import { mount } from 'enzyme';
import { DatePicker } from '../DatePicker';
import React from 'react';

test('disabled date picker', () => {
  const view = mount(<DatePicker value="2020-11-20" isDisabled aria-label="disabled date picker" />);
  expect(view.find('input')).toMatchSnapshot();
});
