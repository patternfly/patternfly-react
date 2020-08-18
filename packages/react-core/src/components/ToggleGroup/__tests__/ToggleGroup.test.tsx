import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ToggleGroup } from '../ToggleGroup';
import { ToggleGroupItem } from '../ToggleGroupItem';

const props = {
  onChange: jest.fn(),
  selected: false
};

test('basic selected', () => {
  const view = shallow(<ToggleGroupItem selected buttonId="toggleGroupItem" aria-label="basic selected" />);
  expect(view).toMatchSnapshot();
});

test('basic not selected', () => {
  const view = shallow(<ToggleGroupItem buttonId="toggleGroupItem" aria-label="basic not selected" />);
  expect(view).toMatchSnapshot();
});

test('icon variant', () => {
  const view = shallow(<ToggleGroupItem selected variant="icon" buttonId="toggleGroupItem" aria-label="icon variant" />);
  expect(view).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = shallow(<ToggleGroupItem isDisabled buttonId="toggleGroupItem" aria-label="isDisabled" />);
  expect(view).toMatchSnapshot();
});

test('item passes selection and event to onChange handler', () => {
  const selected = true;
  const event = {};
  const view = shallow(<ToggleGroupItem buttonId="toggleGroupItem" onChange={props.onChange} aria-label="onChange handler" />);
  view.find('button').simulate('click', event, selected);
  expect(props.onChange).toBeCalledWith(selected, event);
});

test('default theme has dividers', () => {
  const view = mount(
    <ToggleGroup>
      <ToggleGroupItem>Test</ToggleGroupItem>
      <ToggleGroupItem>Test</ToggleGroupItem>
    </ToggleGroup>
  );
  const dividerEl = view.find('Divider');
  expect(dividerEl.length).toBe(1);
});

test('light theme', () => {
  const view = shallow(
    <ToggleGroup variant="light">
      <ToggleGroupItem>Test</ToggleGroupItem>
      <ToggleGroupItem>Test</ToggleGroupItem>
    </ToggleGroup>
  );
  expect(view).toMatchSnapshot();
});

