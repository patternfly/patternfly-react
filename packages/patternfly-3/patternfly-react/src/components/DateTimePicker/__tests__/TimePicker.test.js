import React from 'react';
import { mount, shallow } from 'enzyme';
import TimePicker from '../TimePicker';

test('TimePicker is working properly', () => {
  const component = shallow(<TimePicker value="2/2/2 5:22:31 PM" />);

  expect(component.render()).toMatchSnapshot();
});

test('TimePicker is working properly with time only', () => {
  const component = shallow(<TimePicker value="5:22:31 PM" />);

  expect(component.render()).toMatchSnapshot();
});

test('Edit form of TimePicker', () => {
  const component = mount(<TimePicker value="2:22:31 PM" />);
  component.find('input').simulate('change', { target: { value: '2:42 PM' } });
  component.find('input').simulate('blur');
  expect(component.render()).toMatchSnapshot();
  expect(component.state().value).toEqual(new Date('1/1/1 2:42:00 PM'));
});

test('Clear TimePicker', () => {
  const component = mount(<TimePicker value="2/21/2019, 2:22:31 PM" />);
  component.find('input').simulate('change', { target: { value: '' } });
  component.find('input').simulate('blur');

  expect(component.render()).toMatchSnapshot();
});

test('Show value after clear TimePicker', () => {
  const component = mount(<TimePicker value="2/21/2019, 2:22:31 PM" />);
  component.find('input').simulate('change', { target: { value: '' } });
  component.find('input').simulate('blur');
  component
    .find('.picker-pf')
    .at(0)
    .simulate('click');
  expect(component.render()).toMatchSnapshot();
});

test('Edit after clear TimePicker', () => {
  const component = mount(<TimePicker value="2/21/2019, 2:22:31 PM" />);
  component.find('input').simulate('change', { target: { value: '' } });
  component.find('input').simulate('blur');
  component.find('input').simulate('change', { target: { value: '2:42 PM' } });
  component.find('input').simulate('blur');
  expect(component.render()).toMatchSnapshot();
});
