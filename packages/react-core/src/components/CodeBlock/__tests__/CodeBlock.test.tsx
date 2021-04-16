import React from 'react';
import { shallow, mount } from 'enzyme';
import { CodeBlock } from '../CodeBlock';
import { CodeBlockAction } from '../CodeBlockAction';
import { CodeBlockCode } from '../CodeBlockCode';

test('CodeBlock renders successfully', () => {
  const view = shallow(<CodeBlock>test text</CodeBlock>);
  expect(view).toMatchSnapshot();
});

test('CodeBlockAction renders successfully', () => {
  const view = shallow(<CodeBlockAction>action</CodeBlockAction>);
  expect(view).toMatchSnapshot();
});

test('CodeBlockCode renders successfully', () => {
  const view = shallow(<CodeBlockCode>action</CodeBlockCode>);
  expect(view).toMatchSnapshot();
});

test('CodeBlock with components renders successfully', () => {
  const view = mount(
    <CodeBlock actions={<CodeBlockAction>button</CodeBlockAction>}>
      <CodeBlockCode>inside pre/code tags</CodeBlockCode>
      test outer text
    </CodeBlock>
  );
  expect(view).toMatchSnapshot();
});
