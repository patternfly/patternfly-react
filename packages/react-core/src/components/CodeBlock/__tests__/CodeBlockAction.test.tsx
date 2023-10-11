import React from 'react';
import { render, screen } from '@testing-library/react';
import { CodeBlockAction } from '../CodeBlockAction';
import styles from '@patternfly/react-styles/css/components/CodeBlock/code-block';

test('CodeBlockAction renders', () => {
  render(<CodeBlockAction>action</CodeBlockAction>);
  expect(screen.getByText('action')).toBeVisible();
});

test(`CodeBlockAction renders with class ${styles.codeBlockActions}-item by default`, () => {
  render(<CodeBlockAction>Test</CodeBlockAction>);

  expect(screen.getByText('Test')).toHaveClass(`${styles.codeBlockActions}-item`);
});

test('CodeBlockAction renders with custom class', () => {
  render(<CodeBlockAction className="tester">Test</CodeBlockAction>);

  expect(screen.getByText('Test')).toHaveClass('tester');
});

test('Matches the snapshot', () => {
  const { asFragment } = render(<CodeBlockAction>children</CodeBlockAction>);
  expect(asFragment()).toMatchSnapshot();
});
