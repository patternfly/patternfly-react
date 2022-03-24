import * as React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { Switch } from '../Switch';

const props = {
  onChange: jest.fn(),
  isChecked: false
};

test('switch label for attribute equals input id attribute', () => {
  const view = mount(<Switch id="foo" />);
  expect(view.find('input').prop('id')).toBe('foo');
  expect(view.find('label').prop('htmlFor')).toBe('foo');
});

test('switch label id is auto generated', () => {
  const view = mount(<Switch aria-label="..." />);
  expect(view.find('input').prop('id')).toBeDefined();
});

test('switch is checked', () => {
  const view = render(<Switch id="switch-is-checked" label="On" labelOff="Off" isChecked />);
  expect(view.container).toMatchSnapshot();
});

test('switch is not checked', () => {
  const view = render(<Switch id="switch-is-not-checked" label="On" labelOff="Off" isChecked={false} />);
  expect(view.container).toMatchSnapshot();
});

test('switch with only label is checked', () => {
  const check = true;
  const view = render(<Switch id="switch-is-checked" label={check ? 'On' : 'Off'} isChecked={check} />);
  expect(view.container).toMatchSnapshot();
});

test('switch with only label is not checked', () => {
  const check = false;
  const view = render(<Switch id="switch-is-not-checked" label={check ? 'On' : 'Off'} isChecked={check} />);
  expect(view.container).toMatchSnapshot();
});

test('no label switch is checked', () => {
  const view = render(<Switch id="no-label-switch-is-checked" isChecked />);
  expect(view.container).toMatchSnapshot();
});

test('no label switch is not checked', () => {
  const view = render(<Switch id="no-label-switch-is-not-checked" isChecked={false} />);
  expect(view.container).toMatchSnapshot();
});

test('switch is checked and disabled', () => {
  const view = render(<Switch id="switch-is-checked-and-disabled" isChecked isDisabled />);
  expect(view.container).toMatchSnapshot();
});

test('switch is not checked and disabled', () => {
  const view = render(<Switch id="switch-is-not-checked-and-disabled" isChecked={false} isDisabled />);
  expect(view.container).toMatchSnapshot();
});

test('switch passes value and event to onChange handler', () => {
  const view = mount(<Switch id="onChange-switch" {...props} />);
  const input = view.find('input');
  expect(input.prop('checked')).toBe(false);
  input.simulate('change', { target: { checked: true } });
  expect(props.onChange.mock.calls[0][0]).toBe(true);
});

test('should throw console error when no aria-label or label is given', () => {
  const myMock = jest.fn();
  global.console = { ...global.console, error: myMock };
  mount(<Switch {...props} />);
  expect(myMock).toBeCalled();
});

test('should not throw console error when label is given but no aria-label', () => {
  const myMock = jest.fn();
  global.console = { ...global.console, error: myMock };
  mount(<Switch {...props} label="test switch" />);
  expect(myMock).not.toBeCalled();
});

test('should not throw console error when aria-label is given but no label', () => {
  const myMock = jest.fn();
  global.console = { ...global.console, error: myMock };
  mount(<Switch {...props} aria-label="test switch" />);
  expect(myMock).not.toBeCalled();
});

test('should apply reversed modifier', () => {
  const view = mount(<Switch id="reversed-switch" label="reversed switch" isReversed />);
  const label = view.find('label')
  expect(label.prop('className')).toContain('pf-m-reverse')
})