import * as React from 'react';
import { mount } from 'enzyme';
import { Split } from '../Split';
import { SplitItem } from '../SplitItem';

test('isFilled', () => {
  const view = mount(
    <Split>
      <SplitItem isFilled>Main content</SplitItem>
    </Split>
  );
  expect(view).toMatchSnapshot();
});

test('isFilled defaults to false', () => {
  const view = mount(
    <Split>
      <SplitItem>Basic content</SplitItem>
    </Split>
  );
  expect(view).toMatchSnapshot();
});

test('Gutter', () => {
  const view = mount(
    <Split hasGutter>
      <SplitItem>Basic Content</SplitItem>
    </Split>
  );
  expect(view).toMatchSnapshot();
});
