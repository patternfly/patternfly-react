import React from 'react';
import { shallow, mount } from 'enzyme';
import ContextSelectorToggle from './ContextSelectorToggle';

test('Renders ContextSelectorToggle', () => {
  const view = shallow(<ContextSelectorToggle id="toggle-id" />);
  expect(view).toMatchSnapshot();
});

test('Verify onToggle is called ', () => {
  const mockfnOnClose = jest.fn();
  const mockfnOnToggle = jest.fn();
  const view = mount(<ContextSelectorToggle onToggle={mockfnOnToggle} onClose={mockfnOnClose} id="toggle-id" />);
  view
    .find('button')
    .at(0)
    .simulate('click');
  expect(mockfnOnToggle.mock.calls).toHaveLength(1);
  expect(mockfnOnClose.mock.calls).toHaveLength(0);
});

test('Verify onClose is called ', () => {
  const mockfnOnClose = jest.fn();
  const mockfnOnToggle = jest.fn();
  const view = mount(<ContextSelectorToggle isOpen onToggle={mockfnOnToggle} onClose={mockfnOnClose} id="toggle-id" />);
  view
    .find('button')
    .at(0)
    .simulate('click');
  expect(mockfnOnClose.mock.calls).toHaveLength(1);
  expect(mockfnOnToggle.mock.calls).toHaveLength(1);
});

test('Verify ESC press ', () => {
  const view = mount(<ContextSelectorToggle isOpen id="toggle-id" />);
  view.simulate('keyDown', { key: 'Escape' });
  expect(view).toMatchSnapshot();
});

test('Verify ESC press with not isOpen', () => {
  const view = mount(<ContextSelectorToggle onToggle={jest.fn()} id="toggle-id" />);
  view.simulate('keyDown', { key: 'Escape' });
  expect(view).toMatchSnapshot();
});

test('Verify keydown tab ', () => {
  const view = mount(<ContextSelectorToggle isOpen id="toggle-id" />);
  view.simulate('keyDown', { key: 'Tab' });
  expect(view).toMatchSnapshot();
});

test('Verify keydown enter ', () => {
  const view = mount(<ContextSelectorToggle onToggle={jest.fn()} onEnter={jest.fn()} id="toggle-id" />);
  view.simulate('keyDown', { key: 'Enter' });
  expect(view).toMatchSnapshot();
});
