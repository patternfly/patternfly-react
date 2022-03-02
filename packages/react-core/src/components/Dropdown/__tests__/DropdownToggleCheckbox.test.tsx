import * as React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { DropdownToggleCheckbox } from '../DropdownToggleCheckbox';

const props = {
  onChange: jest.fn(),
  isChecked: false
};

test('controlled', () => {
  const view = render(<DropdownToggleCheckbox isChecked id="check" aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('uncontrolled', () => {
  const view = render(<DropdownToggleCheckbox id="check" aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('with text', () => {
  const view = render(
    <DropdownToggleCheckbox id="check" isDisabled aria-label="check">
      Some text
    </DropdownToggleCheckbox>
  );
  expect(view.container).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = render(<DropdownToggleCheckbox id="check" isDisabled aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('3rd state', () => {
  const view = render(<DropdownToggleCheckbox id="check" isChecked={null} aria-label="check" />);
  expect(view.container).toMatchSnapshot();
});

test('passing class', () => {
  const view = render(
    <DropdownToggleCheckbox label="label" className="class-123" id="check" isChecked aria-label="check" />
  );
  expect(view.container).toMatchSnapshot();
});

test('passing HTML attribute', () => {
  const view = render(
    <DropdownToggleCheckbox label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" />
  );
  expect(view.container).toMatchSnapshot();
});

test('checkbox passes value and event to onChange handler', () => {
  const newValue = true;
  const event = {
    target: { checked: newValue }
  };
  const view = mount(<DropdownToggleCheckbox id="check" {...props} aria-label="check" />);
  view.find('input').simulate('change', event);
  expect(props.onChange.mock.calls[0][0]).toBe(newValue);
  expect(props.onChange.mock.calls[0][1]).toMatchObject(event);
});
