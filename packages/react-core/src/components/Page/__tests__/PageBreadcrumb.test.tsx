import * as React from 'react';
import { mount } from 'enzyme';
import { PageBreadcrumb } from '../PageBreadcrumb';

describe('page breadcrumb', () => {
  test('Verify basic render', () => {
    const view = mount(<PageBreadcrumb>test</PageBreadcrumb>);
    expect(view).toMatchSnapshot();
  });
  test('Verify limited width', () => {
    const view = mount(<PageBreadcrumb isWidthLimited>test</PageBreadcrumb>);
    expect(view).toMatchSnapshot();
  });
  test('Verify top sticky', () => {
    const view = mount(<PageBreadcrumb sticky="top">test</PageBreadcrumb>);
    expect(view).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const view = mount(<PageBreadcrumb sticky="bottom">test</PageBreadcrumb>);
    expect(view).toMatchSnapshot();
  });
  test('Verify top shadow', () => {
    const view = mount(<PageBreadcrumb hasShadowTop>test</PageBreadcrumb>);
    expect(view).toMatchSnapshot();
  });
  test('Verify bottom shadow', () => {
    const view = mount(<PageBreadcrumb hasShadowBottom>test</PageBreadcrumb>);
    expect(view).toMatchSnapshot();
  });
  test('Verify overflow scroll', () => {
    const view = mount(<PageBreadcrumb hasOverflowScroll>test</PageBreadcrumb>);
    expect(view).toMatchSnapshot();
  });
});
