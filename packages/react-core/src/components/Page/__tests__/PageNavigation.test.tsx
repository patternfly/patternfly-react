import * as React from 'react';
import { mount } from 'enzyme';
import { PageNavigation } from '../PageNavigation';

describe('page navigation', () => {
  test('Verify basic render', () => {
    const view = mount(<PageNavigation>test</PageNavigation>);
    expect(view).toMatchSnapshot();
  });
  test('Verify limited width', () => {
    const view = mount(<PageNavigation isWidthLimited>test</PageNavigation>);
    expect(view).toMatchSnapshot();
  });
  test('Verify top sticky', () => {
    const view = mount(<PageNavigation sticky="top">test</PageNavigation>);
    expect(view).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const view = mount(<PageNavigation sticky="bottom">test</PageNavigation>);
    expect(view).toMatchSnapshot();
  });
  test('Verify top shadow', () => {
    const view = mount(<PageNavigation hasShadowTop>test</PageNavigation>);
    expect(view).toMatchSnapshot();
  });
  test('Verify bottom shadow', () => {
    const view = mount(<PageNavigation hasShadowBottom>test</PageNavigation>);
    expect(view).toMatchSnapshot();
  });
  test('Verify overflow scroll', () => {
    const view = mount(<PageNavigation hasOverflowScroll>test</PageNavigation>);
    expect(view).toMatchSnapshot();
  });
});
