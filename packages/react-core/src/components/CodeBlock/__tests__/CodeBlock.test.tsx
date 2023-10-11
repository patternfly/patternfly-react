import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlock } from '../CodeBlock';
import styles from '@patternfly/react-styles/css/components/CodeBlock/code-block';

test('CodeBlock renders', () => {
  render(<CodeBlock>test text</CodeBlock>);
  expect(screen.getByText('test text')).toBeVisible();
});

test(`CodeBlock content renders with class ${styles.codeBlockContent} by default`, () => {
  render(<CodeBlock>Test</CodeBlock>);

  expect(screen.getByText('Test')).toHaveClass(styles.codeBlockContent);
});

test('CodeBlock renders with custom class', () => {
  render(
    <CodeBlock data-testid="code-block" className="tester">
      Test
    </CodeBlock>
  );

  expect(screen.getByTestId('code-block')).toHaveClass('tester');
});

test('Renders when actions are passed to CodeBlock', () => {
  render(<CodeBlock actions={<div>actions</div>} />);
  expect(screen.getByText('actions')).toBeVisible();
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CodeBlock actions={<div>actions</div>}>children</CodeBlock>);
  expect(asFragment()).toMatchSnapshot();
});
