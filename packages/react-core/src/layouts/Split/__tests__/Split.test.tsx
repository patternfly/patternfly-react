import * as React from 'react';
import { render } from '@testing-library/react';
import { Split } from '../Split';
import { SplitItem } from '../SplitItem';

test('isFilled', () => {
  const view = render(
    <Split>
      <SplitItem isFilled>Main content</SplitItem>
    </Split>
  );
  expect(view.container).toMatchSnapshot();
});

test('isFilled defaults to false', () => {
  const view = render(
    <Split>
      <SplitItem>Basic content</SplitItem>
    </Split>
  );
  expect(view.container).toMatchSnapshot();
});

test('Gutter', () => {
  const view = render(
    <Split hasGutter>
      <SplitItem>Basic Content</SplitItem>
    </Split>
  );
  expect(view.container).toMatchSnapshot();
});

test('Wrappable', () => {
  const view = render(
    <Split isWrappable>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
      <SplitItem>Basic Content</SplitItem>
    </Split>
  );
  expect(view.container).toMatchSnapshot();
});
