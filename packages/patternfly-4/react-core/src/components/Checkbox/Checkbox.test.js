import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

const props = {
  onChange: jest.fn(),
  checked: false
};

test('controlled', () => {
  const view = shallow(<Checkbox checked />);
  expect(view).toMatchSnapshot();
});

test('uncontrolled', () => {
  const view = shallow(<Checkbox />);
  expect(view).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = shallow(<Checkbox isDisabled />);
  expect(view).toMatchSnapshot();
});

test('checkbox passes value and event to onChange handler', () => {
  const newValue = true;
  const event = {
    currentTarget: { checked: newValue }
  };
  const view = shallow(<Checkbox {...props} />);
  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});
