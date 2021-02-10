import * as React from 'react';
import { mount } from 'enzyme';
import { PageGroup } from '../PageGroup';

describe('page group', () => {
  test('Verify basic render', () => {
    const view = mount(<PageGroup>test</PageGroup>);
    expect(view).toMatchSnapshot();
  });
  test('Verify top sticky', () => {
    const view = mount(<PageGroup sticky="top">test</PageGroup>);
    expect(view).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const view = mount(<PageGroup sticky="bottom">test</PageGroup>);
    expect(view).toMatchSnapshot();
  });
  test('Verify top shadow', () => {
    const view = mount(<PageGroup hasShadowTop>test</PageGroup>);
    expect(view).toMatchSnapshot();
  });
  test('Verify bottom shadow', () => {
    const view = mount(<PageGroup hasShadowBottom>test</PageGroup>);
    expect(view).toMatchSnapshot();
  });
  test('Verify overflow scroll', () => {
    const view = mount(<PageGroup hasOverflowScroll>test</PageGroup>);
    expect(view).toMatchSnapshot();
  });
});
