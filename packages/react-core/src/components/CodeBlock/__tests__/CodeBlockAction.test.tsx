import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlockAction } from '../CodeBlockAction';

test('CodeBlockAction renders', () => {
  render(<CodeBlockAction data-testid="code-block-action">action</CodeBlockAction>);
  expect(screen.getByText('action')).toBeVisible();
});

test('CodeBlockAction renders with class pf-v5-c-code-block__actions-item by default', () => {
  render(<CodeBlockAction data-testid="code-block-action">Test</CodeBlockAction>);

  expect(screen.getByText('Test')).toHaveClass('pf-v5-c-code-block__actions-item');
});

test('CodeBlockAction renders with custom class', () => {
  render(
    <CodeBlockAction className="tester">
      Test
    </CodeBlockAction>
  );

  expect(screen.getByText('Test')).toHaveClass('tester');
});
