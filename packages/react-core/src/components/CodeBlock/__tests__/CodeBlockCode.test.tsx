import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlockCode } from '../CodeBlockCode';

test('CodeBlockCode renders', () => {
  render(<CodeBlockCode>action</CodeBlockCode>);
  expect(screen.getByText('action')).toBeVisible();
});

test('Renders with class pf-v5-c-code-block__code by default', () => {
  render(<CodeBlockCode>Test</CodeBlockCode>);

  expect(screen.getByText('Test')).toHaveClass('pf-v5-c-code-block__code');
});

test('Renders with custom class', () => {
  render(<CodeBlockCode codeClassName="tester">Test</CodeBlockCode>);

  expect(screen.getByText('Test')).toHaveClass('tester');
});
