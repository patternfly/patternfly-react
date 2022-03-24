import * as React from 'react';
import { render } from '@testing-library/react';
import { PageBreadcrumb } from '../PageBreadcrumb';

describe('page breadcrumb', () => {
  test('Verify basic render', () => {
    const view = render(<PageBreadcrumb>test</PageBreadcrumb>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify limited width', () => {
    const view = render(<PageBreadcrumb isWidthLimited>test</PageBreadcrumb>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify top sticky', () => {
    const view = render(<PageBreadcrumb sticky="top">test</PageBreadcrumb>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const view = render(<PageBreadcrumb sticky="bottom">test</PageBreadcrumb>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify top shadow', () => {
    const view = render(<PageBreadcrumb hasShadowTop>test</PageBreadcrumb>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify bottom shadow', () => {
    const view = render(<PageBreadcrumb hasShadowBottom>test</PageBreadcrumb>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify overflow scroll', () => {
    const view = render(<PageBreadcrumb hasOverflowScroll>test</PageBreadcrumb>);
    expect(view.container).toMatchSnapshot();
  });
});
