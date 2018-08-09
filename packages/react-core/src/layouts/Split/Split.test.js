import React from 'react';
import { mount } from 'enzyme';
import Split from './Split';
import SplitItem, { SplitItemVariant } from './SplitItem';
import { GutterSize } from '../../styles/gutters';

test('Secondary and primary set', () => {
  const view = mount(
    <Split>
      <SplitItem variant={SplitItemVariant.secondary}>Secondary content</SplitItem>
      <SplitItem variant={SplitItemVariant.primary}>Primary content</SplitItem>
      <SplitItem variant={SplitItemVariant.secondary}>Secondary content</SplitItem>
    </Split>
  );
  // Add a useful assertion here.
  expect(view).toMatchSnapshot();
});

test('No variant set', () => {
  const view = mount(
    <Split>
      <SplitItem>Secondary content</SplitItem>
      <SplitItem>Primary content</SplitItem>
      <SplitItem>Secondary content</SplitItem>
    </Split>
  );
  // Add a useful assertion here.
  expect(view).toMatchSnapshot();
});

Object.values(GutterSize).forEach(gutter => {
  test(`Gutter ${gutter}`, () => {
    const view = mount(
      <Split gutter={gutter}>
        <SplitItem>Secondary content</SplitItem>
        <SplitItem>Primary content</SplitItem>
        <SplitItem>Secondary content</SplitItem>
      </Split>
    );
    expect(view).toMatchSnapshot();
  });
});
