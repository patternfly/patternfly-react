import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlockCode } from '../CodeBlockCode';
import styles from '@patternfly/react-styles/css/components/CodeBlock/code-block';

test('CodeBlockCode renders', () => {
  render(<CodeBlockCode>action</CodeBlockCode>);
  expect(screen.getByText('action')).toBeVisible();
});

test(`Renders with class ${styles.codeBlockPre} by default`, () => {
  render(
    <CodeBlockCode data-testid="code-block-code" className="test">
      Test
    </CodeBlockCode>
  );

  expect(screen.getByTestId('code-block-code')).toHaveClass(`${styles.codeBlockPre} test`);
});

test(`Renders with class ${styles.codeBlockCode} by default`, () => {
  render(<CodeBlockCode>Test</CodeBlockCode>);

  expect(screen.getByText('Test')).toHaveClass(styles.codeBlockCode);
});

test('Renders with custom class', () => {
  render(<CodeBlockCode codeClassName="tester">Test</CodeBlockCode>);

  expect(screen.getByText('Test')).toHaveClass('tester');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CodeBlockCode>children</CodeBlockCode>);
  expect(asFragment()).toMatchSnapshot();
});
