import React from 'react';
import { mount, shallow } from 'enzyme';
import DatePicker from '../DatePicker';

test('DatePicker is working properly', () => {
  const component = shallow(<DatePicker value="2/21/2019, 2:22:31 PM" />);

  expect(component.render()).toMatchSnapshot();
});

test('Edit form of DatePicker', () => {
  const component = mount(<DatePicker value="2/21/2019" />);
  expect(component.render()).toMatchSnapshot();
  component.find('input').simulate('change', { target: { value: '2/22/2019' } });
  component.find('input').simulate('blur');
  expect(component.state().value).toEqual(new Date('2/22/2019'));
});

test('Clear DatePicker', () => {
  const component = mount(<DatePicker value="2/21/2019, 2:22:31 PM" />);
  component.find('input').simulate('change', { target: { value: '' } });
  component.find('input').simulate('blur');

  expect(component.render()).toMatchSnapshot();
});

test('Show value after clear DatePicker', () => {
  const component = mount(<DatePicker value="2/21/2019, 2:22:31 PM" />);
  component.find('input').simulate('change', { target: { value: '' } });
  component.find('input').simulate('blur');
  component
    .find('.date-picker-pf')
    .at(0)
    .simulate('click');
  expect(component.render()).toMatchSnapshot();
});

test('Edit after clear DatePicker', () => {
  const component = mount(<DatePicker value="2/21/2019, 2:22:31 PM" />);
  component.find('input').simulate('change', { target: { value: '' } });
  component.find('input').simulate('blur');
  component.find('input').simulate('change', { target: { value: '2/21/2019' } });
  component.find('input').simulate('blur');
  expect(component.render()).toMatchSnapshot();
});
