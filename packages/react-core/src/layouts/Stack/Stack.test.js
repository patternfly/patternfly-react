import React from 'react';
import { mount } from 'enzyme';
import Stack from './Stack';
import StackItem, { StackItemVariant } from './StackItem';
import { GutterSize } from '../../styles/gutters';

test('Secondary and primary', () => {
  const view = mount(
    <Stack>
      <StackItem variant={StackItemVariant.secondary}>Secondary content</StackItem>
      <StackItem variant={StackItemVariant.primary}>Primary content</StackItem>
      <StackItem variant={StackItemVariant.secondary}>Secondary content</StackItem>
    </Stack>
  );
  // Add a useful assertion here.
  expect(view).toMatchSnapshot();
});

Object.values(GutterSize).forEach(gutter => {
  test(`Gutter ${gutter}`, () => {
    const view = mount(
      <Stack gutter={gutter}>
        <StackItem variant={StackItemVariant.secondary}>Secondary content</StackItem>
        <StackItem variant={StackItemVariant.primary}>Primary content</StackItem>
        <StackItem variant={StackItemVariant.secondary}>Secondary content</StackItem>
      </Stack>
    );
    expect(view).toMatchSnapshot();
  });
});
