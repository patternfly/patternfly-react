import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlockCode } from '../CodeBlockCode';

test('CodeBlockCode renders without children', () => {
  render(<CodeBlockCode data-testid="code-block-code" />);
  expect(screen.getByTestId('code-block-code')).toBeVisible();
});

test('CodeBlockCode renders with children', () => {
  render(<CodeBlockCode data-testid="code-block-code">action</CodeBlockCode>);
  expect(screen.getByTestId('code-block-code')).toBeVisible();
});

test('Renders with class pf-v5-c-code-block__pre by default', () => {
  render(<CodeBlockCode data-testid="code-block-code">Test</CodeBlockCode>);

  expect(screen.getByTestId('code-block-code')).toHaveClass('pf-v5-c-code-block__pre');
});

test('Renders with custom class', () => {
  render(<CodeBlockCode data-testid="code-block-code" className="tester">Test</CodeBlockCode>);

  expect(screen.getByTestId('code-block-code')).toHaveClass('tester');
});
