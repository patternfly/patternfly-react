import * as React from 'react';
import { render } from '@testing-library/react';
import { Stack } from '../Stack';
import { StackItem } from '../StackItem';

test('isMain set to true', () => {
  const view = render(
    <Stack>
      <StackItem isFilled>Filled content</StackItem>
    </Stack>
  );
  expect(view.container).toMatchSnapshot();
});

test('isMain defaults to false', () => {
  const view = render(
    <Stack>
      <StackItem>Basic content</StackItem>
    </Stack>
  );
  expect(view.container).toMatchSnapshot();
});

test('gutter', () => {
  const view = render(
    <Stack hasGutter>
      <StackItem>Basic content</StackItem>
    </Stack>
  );
  expect(view.container).toMatchSnapshot();
});
