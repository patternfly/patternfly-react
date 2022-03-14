import * as React from 'react';
import { render } from '@testing-library/react';
import { PageNavigation } from '../PageNavigation';

describe('page navigation', () => {
  test('Verify basic render', () => {
    const view = render(<PageNavigation>test</PageNavigation>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
  test('Verify limited width', () => {
    const view = render(<PageNavigation isWidthLimited>test</PageNavigation>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
  test('Verify top sticky', () => {
    const view = render(<PageNavigation sticky="top">test</PageNavigation>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const view = render(<PageNavigation sticky="bottom">test</PageNavigation>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
  test('Verify top shadow', () => {
    const view = render(<PageNavigation hasShadowTop>test</PageNavigation>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
  test('Verify bottom shadow', () => {
    const view = render(<PageNavigation hasShadowBottom>test</PageNavigation>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
  test('Verify overflow scroll', () => {
    const view = render(<PageNavigation hasOverflowScroll>test</PageNavigation>);
    expect(view.container.outerHTML).toMatchSnapshot();
  });
});
