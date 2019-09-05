import * as React from 'react';
import { shallow } from 'enzyme';
import { DropdownToggleCheckbox } from './DropdownToggleCheckbox';

const props = {
  onChange: jest.fn(),
  isChecked: false
};

test('controlled', () => {
  const view = shallow(<DropdownToggleCheckbox isChecked id="check" aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('uncontrolled', () => {
  const view = shallow(<DropdownToggleCheckbox id="check" aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('with text', () => {
  const view = shallow(<DropdownToggleCheckbox id="check" isDisabled aria-label="check">Some text</DropdownToggleCheckbox>);
  expect(view).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = shallow(<DropdownToggleCheckbox id="check" isDisabled aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('3rd state', () => {
  const view = shallow(<DropdownToggleCheckbox id="check" isChecked={null} aria-label="check" />);
  expect(view).toMatchSnapshot();
});

test('passing class', () => {
  const view = shallow(
    <DropdownToggleCheckbox label="label" className="class-123" id="check" isChecked aria-label="check" />
  );
  expect(view).toMatchSnapshot();
});

test('passing HTML attribute', () => {
  const view = shallow(
    <DropdownToggleCheckbox label="label" aria-labelledby="labelId" id="check" isChecked aria-label="check" />
  );
  expect(view).toMatchSnapshot();
});
