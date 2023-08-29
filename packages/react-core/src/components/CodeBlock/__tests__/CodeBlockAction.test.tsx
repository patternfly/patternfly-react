import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlockAction } from '../CodeBlockAction';

test('CodeBlockAction renders without children', () => {
  render(<CodeBlockAction data-testid="code-block-action" />);

  expect(screen.getByTestId('code-block-action')).toBeVisible();
});

test('CodeBlockAction renders with children', () => {
  render(<CodeBlockAction data-testid="code-block-action">action</CodeBlockAction>);
  expect(screen.getByTestId('code-block-action')).toBeVisible();
});

test('Renders with class pf-v5-c-code-block__actions-item by default', () => {
  render(<CodeBlockAction data-testid="code-block-action">Test</CodeBlockAction>);

  expect(screen.getByTestId('code-block-action')).toHaveClass('pf-v5-c-code-block__actions-item');
});

test('Renders with custom class', () => {
  render(
    <CodeBlockAction data-testid="code-block-action" className="tester">
      Test
    </CodeBlockAction>
  );

  expect(screen.getByTestId('code-block-action')).toHaveClass('tester');
});
