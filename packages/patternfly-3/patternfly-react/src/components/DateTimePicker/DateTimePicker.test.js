import React from 'react';
import { mount } from 'enzyme';
import { DateTimePicker } from './index';

test('DateTimePicker is working properly', () => {
  const component = mount(<DateTimePicker value="2/21/2019, 2:22:31 PM" />);

  expect(component.render()).toMatchSnapshot();
});

test('Edit form of DateTimePicker', () => {
  const component = mount(<DateTimePicker value="2/21/2019, 2:22:31 PM" />);
  expect(component.render()).toMatchSnapshot();
  component.find('input').simulate('change', { target: { value: '2/22/2019, 2:22:31 PM' } });
  component.find('input').simulate('blur');
  expect(component.state().value).toEqual(new Date('2/22/2019, 2:22:31 PM'));
});
