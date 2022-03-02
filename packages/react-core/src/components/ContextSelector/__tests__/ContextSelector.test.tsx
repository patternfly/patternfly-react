import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { shallow } from 'enzyme';
import { ContextSelector } from '../ContextSelector';
import { ContextSelectorItem } from '../ContextSelectorItem';

const items = [
  <ContextSelectorItem key="0">My Project</ContextSelectorItem>,
  <ContextSelectorItem key="1">OpenShift Cluster</ContextSelectorItem>,
  <ContextSelectorItem key="2">Production Ansible</ContextSelectorItem>,
  <ContextSelectorItem key="3">AWS</ContextSelectorItem>,
  <ContextSelectorItem key="4">Azure</ContextSelectorItem>
];

test('Renders ContextSelector', () => {
  const view = render(<ContextSelector> {items} </ContextSelector>);
  expect(view.container).toMatchSnapshot();
});

test('Renders ContextSelector open', () => {
  const view = shallow(<ContextSelector isOpen> {items} </ContextSelector>);
  expect(view).toMatchSnapshot();
});

test('Verify onToggle is called ', () => {
  const mockfn = jest.fn();
  render(<ContextSelector onToggle={mockfn}> {items} </ContextSelector>);

  userEvent.click(screen.getByRole('button'));
  expect(mockfn.mock.calls).toHaveLength(1);
});
