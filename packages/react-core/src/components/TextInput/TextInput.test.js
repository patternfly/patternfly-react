import React from 'react';
import { shallow } from 'enzyme';
import TextInput from './TextInput';

const props = {
  onChange: jest.fn(),
  value: 'test input'
};

test('input passes value and event to onChange handler', () => {
  const newValue = 'new test input';
  const event = {
    currentTarget: { value: newValue }
  };
  const view = shallow(<TextInput {...props} aria-label="test input" />);
  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});

test('simple text input', () => {
  const view = shallow(<TextInput {...props} aria-label="simple text input" />);
  expect(view).toMatchSnapshot();
});

test('disabled text input', () => {
  const view = shallow(<TextInput isDisabled aria-label="disabled text input" />);
  expect(view).toMatchSnapshot();
});

test('readonly text input', () => {
  const view = shallow(<TextInput isReadOnly value="read only" aria-label="readonly text input" />);
  expect(view).toMatchSnapshot();
});

test('invalid text input', () => {
  const view = shallow(<TextInput {...props} required isValid={false} aria-label="invalid text input" />);
  expect(view).toMatchSnapshot();
});

test('alternative styles', () => {
  const view = shallow(<TextInput {...props} isAlt aria-label="alternative style text input" />);
  expect(view).toMatchSnapshot();
});

test('should throw console error when no aria-label or id is given', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  shallow(<TextInput {...props} />);
  expect(myMock).toBeCalled();
});

test('should not throw console error when id is given but no aria-label', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  shallow(<TextInput {...props} id="5" />);
  expect(myMock).not.toBeCalled();
});

test('should not throw console error when aria-label is given but no id', () => {
  const myMock = jest.fn();
  global.console = { error: myMock };
  shallow(<TextInput {...props} aria-label="test input" />);
  expect(myMock).not.toBeCalled();
});
