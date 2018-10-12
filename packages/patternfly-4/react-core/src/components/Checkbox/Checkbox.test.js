import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

const props = {
  onChange: jest.fn(),
  checked: false
};

test('controlled', () => {
  const view = shallow(<Checkbox checked id="check" aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('uncontrolled', () => {
  const view = shallow(<Checkbox id="check" aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = shallow(<Checkbox id="check" isDisabled aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('label is string', () => {
  const view = shallow(<Checkbox label="Label" id="check" checked aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('label is function', () => {
  const functionLabel = () => <h1>Header</h1>;
  const view = shallow(<Checkbox label={functionLabel()} id="check" checked aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('label is node', () => {
  const view = shallow(<Checkbox label={<h1>Header</h1>} id="check" checked aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('passing class', () => {
  const view = shallow(<Checkbox label="label" className="class-123" id="check" checked aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('passing HTML attribute', () => {
  const view = shallow(<Checkbox label="label" aria-labelledby="labelId" id="check" checked aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('checkbox passes value and event to onChange handler', () => {
  const newValue = true;
  const event = {
    currentTarget: { checked: newValue }
  };
  const view = shallow(<Checkbox id="check" {...props} aria-label="check" />);
  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});
