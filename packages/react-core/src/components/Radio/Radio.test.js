import React from 'react';
import { shallow } from 'enzyme';
import Radio from './Radio';

const props = {
  onChange: jest.fn(),
  checked: false
};

test('controlled', () => {
  const view = shallow(<Radio checked />);
  expect(view).toMatchSnapshot();
});

test('uncontrolled', () => {
  const view = shallow(<Radio />);
  expect(view).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = shallow(<Radio isDisabled />);
  expect(view).toMatchSnapshot();
});

test('radio passes value and event to onChange handler', () => {
  const newValue = true;
  const event = {
    currentTarget: { checked: newValue }
  };
  const view = shallow(<Radio {...props} />);
  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});
