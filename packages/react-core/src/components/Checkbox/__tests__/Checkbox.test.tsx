import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { Checkbox } from '../Checkbox';

const props = {
  onChange: jest.fn(),
  isChecked: false
};

test('controlled', () => {
  const view = render(<Checkbox isChecked id="check" aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('controlled - 3rd state', () => {
  const view = render(<Checkbox isChecked={null} id="check" aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('uncontrolled', () => {
  const view = render(<Checkbox id="check" aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = render(<Checkbox id="check" isDisabled aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('label is string', () => {
  const view = render(<Checkbox label="Label" id="check" isChecked aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('label is function', () => {
  const functionLabel = () => <h1>Header</h1>;
  const view = render(<Checkbox label={functionLabel()} id="check" isChecked aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('label is node', () => {
  const view = render(<Checkbox label={<h1>Header</h1>} id="check" isChecked aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('passing class', () => {
  const view = render(<Checkbox label="label" className="class-123" id="check" isChecked aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('passing HTML attribute', () => {
  const view = render(<Checkbox label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('passing description', () => {
  const view = shallow(<Checkbox id="check" label="checkbox" description="Text description..." />);
  const descriptionEl = view.find('span[className="pf-c-check__description"]');
  expect(descriptionEl.length).toBe(1);
  expect(descriptionEl.text()).toBe('Text description...');
});

test('passing body', () => {
  const view = shallow(<Checkbox id="check" label="checkbox" body="This is where custom content goes." />);
  const bodyEl = view.find('span[className="pf-c-check__body"]');
  expect(bodyEl.length).toBe(1);
  expect(bodyEl.text()).toBe('This is where custom content goes.');
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

test('should throw console error when no id is given', () => {
  const myMock = jest.fn();
  global.console = { ...global.console, error: myMock };
  render(<Checkbox {...props} />);
  expect(myMock).toBeCalled();
});
