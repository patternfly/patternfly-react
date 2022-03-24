import * as React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { ToggleGroup } from '../ToggleGroup';
import { ToggleGroupItem } from '../ToggleGroupItem';

const props = {
  onChange: jest.fn(),
  selected: false
};

test('basic selected', () => {
  const view = render(<ToggleGroupItem text="test" selected buttonId="toggleGroupItem" aria-label="basic selected" />);
  expect(view.container).toMatchSnapshot();
});

test('basic not selected', () => {
  const view = render(<ToggleGroupItem text="test" buttonId="toggleGroupItem" aria-label="basic not selected" />);
  expect(view.container).toMatchSnapshot();
});

test('icon variant', () => {
  const view = render(<ToggleGroupItem selected icon="icon" buttonId="toggleGroupItem" aria-label="icon variant" />);
  expect(view.container).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = render(<ToggleGroupItem text="test" isDisabled buttonId="toggleGroupItem" aria-label="isDisabled" />);
  expect(view.container).toMatchSnapshot();
});

test('item passes selection and event to onChange handler', () => {
  const selected = true;
  const event = {};
  const view = shallow(<ToggleGroupItem text="test" buttonId="toggleGroupItem" onChange={props.onChange} aria-label="onChange handler" />);
  view.find('button').simulate('click', event, selected);
  expect(props.onChange).toBeCalledWith(selected, event);
});

test('isCompact', () => {
  const view = render(
    <ToggleGroup isCompact>
      <ToggleGroupItem text="Test" />
      <ToggleGroupItem text="Test" />
    </ToggleGroup>
  );
  expect(view.container).toMatchSnapshot();
});

