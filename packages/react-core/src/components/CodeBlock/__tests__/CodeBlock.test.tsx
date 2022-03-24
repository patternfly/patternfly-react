import React from 'react';
import { render } from '@testing-library/react';
import { CodeBlock } from '../CodeBlock';
import { CodeBlockAction } from '../CodeBlockAction';
import { CodeBlockCode } from '../CodeBlockCode';

test('CodeBlock renders successfully', () => {
  const view = render(<CodeBlock>test text</CodeBlock>);
  expect(view.container).toMatchSnapshot();
});

test('CodeBlockAction renders successfully', () => {
  const view = render(<CodeBlockAction>action</CodeBlockAction>);
  expect(view.container).toMatchSnapshot();
});

test('CodeBlockCode renders successfully', () => {
  const view = render(<CodeBlockCode>action</CodeBlockCode>);
  expect(view.container).toMatchSnapshot();
});

test('CodeBlock with components renders successfully', () => {
  const view = render(
    <CodeBlock actions={<CodeBlockAction>button</CodeBlockAction>}>
      <CodeBlockCode>inside pre/code tags</CodeBlockCode>
      test outer text
    </CodeBlock>
  );
  expect(view.container).toMatchSnapshot();
});
