import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { ContextSelectorToggle } from '../ContextSelectorToggle';

test('Renders ContextSelectorToggle', () => {
  const view = render(<ContextSelectorToggle id="toggle-id" />);
  expect(view.container).toMatchSnapshot();
});

test('Verify onToggle is called ', () => {
  const mockfnOnToggle = jest.fn();
  const view = mount(<ContextSelectorToggle onToggle={mockfnOnToggle} id="toggle-id" />);
  view
    .find('button')
    .at(0)
    .simulate('click');
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
