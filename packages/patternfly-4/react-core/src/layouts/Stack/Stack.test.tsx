import * as React from 'react';
import { mount } from 'enzyme';
import { Stack } from './Stack';
import { StackItem } from './StackItem';

test('isMain set to true', () => {
  const view = mount(
    <Stack>
      <StackItem isFilled>Filled content</StackItem>
    </Stack>
  );
  expect(view).toMatchSnapshot();
});

test('isMain defaults to false', () => {
  const view = mount(
    <Stack>
      <StackItem>Basic content</StackItem>
    </Stack>
  );
  expect(view).toMatchSnapshot();
});

[true, false].forEach(hasGutter => {
  test(`Gutter ${hasGutter}`, () => {
    const view = mount(
      <Stack hasGutter={hasGutter}>
        <StackItem>Basic content</StackItem>
      </Stack>
    );
    expect(view).toMatchSnapshot();
  });
});
