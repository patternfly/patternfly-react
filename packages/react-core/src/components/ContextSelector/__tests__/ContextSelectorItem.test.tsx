import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContextSelectorItem } from '../ContextSelectorItem';

test('Renders ContextSelectorItem', () => {
  const view = render(
    <ContextSelectorItem sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  expect(view.container).toMatchSnapshot();
});

test('Renders ContextSelectorItem disabled and hovered', () => {
  const view = render(
    <ContextSelectorItem isDisabled sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  expect(view.container).toMatchSnapshot();
});

test('Verify onClick is called ', () => {
  const mockfn = jest.fn();

  render(
    <ContextSelectorItem onClick={mockfn} sendRef={jest.fn()} index={0}>
      My Project
    </ContextSelectorItem>
  );
  userEvent.click(screen.getByRole('button'));

  expect(mockfn.mock.calls).toHaveLength(1);
});
