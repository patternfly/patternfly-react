import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlock } from '../CodeBlock';
import { CodeBlockAction } from '../CodeBlockAction';
import { CodeBlockCode } from '../CodeBlockCode';

test('CodeBlock renders', () => {
    render(<CodeBlock>test text</CodeBlock>);
    expect(screen.getByText('test text')).toBeVisible();
  });

test('CodeBlock content renders with class pf-v5-c-code-block__content by default', () => {
  render(<CodeBlock>Test</CodeBlock>);

  expect(screen.getByText('Test')).toHaveClass('pf-v5-c-code-block__content');
});

test('CodeBlock renders with custom class', () => {
  render(<CodeBlock data-testid="code-block" className="tester">Test</CodeBlock>);

  expect(screen.getByTestId('code-block')).toHaveClass('tester');
});

  test('Renders code when child is of type CodeBlockCode', () => {
    render(
      <CodeBlock actions={<CodeBlockAction>button</CodeBlockAction>}>
        <CodeBlockCode>inside pre/code tags</CodeBlockCode>
        test outer text
      </CodeBlock>
    );
    expect(screen.getByText('inside pre/code tags')).toBeVisible();
  });
