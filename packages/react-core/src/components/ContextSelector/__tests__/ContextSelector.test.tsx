import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ContextSelector } from '../ContextSelector';
import { ContextSelectorItem } from '../ContextSelectorItem';

const items = [
  <ContextSelectorItem key="0">My Project</ContextSelectorItem>,
  <ContextSelectorItem key="1">OpenShift Cluster</ContextSelectorItem>,
  <ContextSelectorItem key="2">Production Ansible</ContextSelectorItem>,
  <ContextSelectorItem key="3">AWS</ContextSelectorItem>,
  <ContextSelectorItem key="4">Azure</ContextSelectorItem>
];

describe('ContextSelector', () => {
  test('Renders ContextSelector', () => {
    const { asFragment } = render(<ContextSelector id="render">{items}</ContextSelector>);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Renders ContextSelector open', () => {
    const { asFragment } = render(
      <ContextSelector isOpen id="render-open">
        {items}
      </ContextSelector>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('Renders in strict mode', () => {
    const consoleError = jest.spyOn(console, 'error');
    const { asFragment } = render(
      <React.StrictMode>
        <ContextSelector removeFindDomNode isOpen id="render">
          {items}
        </ContextSelector>
      </React.StrictMode>
    );
    expect(consoleError).not.toHaveBeenCalled();
    expect(asFragment()).toMatchSnapshot();
  });

  test('Verify onToggle is called ', async () => {
    const mockfn = jest.fn();
    const user = userEvent.setup();

    render(<ContextSelector onToggle={mockfn}>{items}</ContextSelector>);

    await user.click(screen.getByRole('button'));
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});
