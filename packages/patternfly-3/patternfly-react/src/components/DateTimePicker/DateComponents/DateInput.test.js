import React from 'react';
import { mount, shallow } from 'enzyme';
import DateInput from './DateInput';
import { isEqualDate } from './helpers';

test('DateInput is working properly', () => {
  const component = shallow(<DateInput date="1/21/2019, 2:22:31 PM" />);

  expect(component.render()).toMatchSnapshot();
});

test('DateInput changes selected on click', () => {
  const setSelected = jest.fn();
  const component = mount(<DateInput date="1/21/2019, 2:22:31 PM" setSelected={setSelected} />);
  component
    .find('.weekend')
    .first()
    .simulate('click');
  expect(setSelected).toBeCalledWith(new Date('2019-01-04 14:22:31'));
});

test('DateInput toggles view to years', () => {
  const component = mount(<DateInput date="1/21/2019, 2:22:31 PM" />);
  component
    .find('.picker-switch')
    .first()
    .simulate('click');
  expect(component.render()).toMatchSnapshot();
});
test('DateInput toggles view to decades', () => {
  const component = mount(<DateInput date="1/21/2019, 2:22:31 PM" />);
  component
    .find('.picker-switch')
    .first()
    .simulate('click');
  component
    .find('.picker-switch')
    .first()
    .simulate('click');
  expect(component.render()).toMatchSnapshot();
});

test('DateInput is working properly with wrong date format', () => {
  const component = shallow(<DateInput date="ABC" />);
  expect(isEqualDate(component.get(0).props.children.props.date, new Date())).toBeTruthy();
});
