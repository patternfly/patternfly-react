import React from 'react';
import { mount } from 'enzyme';
import Split from './Split';
import SplitItem from './SplitItem';
import { GutterSize } from '../../styles/gutters';

test('isMain', () => {
  const view = mount(
    <Split>
      <SplitItem isMain>Main content</SplitItem>
    </Split>
  );
  expect(view).toMatchSnapshot();
});

test('isMain defaults to false', () => {
  const view = mount(
    <Split>
      <SplitItem>Basic content</SplitItem>
    </Split>
  );
  expect(view).toMatchSnapshot();
});

Object.values(GutterSize).forEach(gutter => {
  test(`Gutter ${gutter}`, () => {
    const view = mount(
      <Split gutter={gutter}>
        <SplitItem>Basic Content</SplitItem>
      </Split>
    );
    expect(view).toMatchSnapshot();
  });
});
