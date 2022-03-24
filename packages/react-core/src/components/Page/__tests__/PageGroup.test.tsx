import * as React from 'react';
import { render } from '@testing-library/react';
import { PageGroup } from '../PageGroup';

describe('page group', () => {
  test('Verify basic render', () => {
    const view = render(<PageGroup>test</PageGroup>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify top sticky', () => {
    const view = render(<PageGroup sticky="top">test</PageGroup>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify bottom sticky', () => {
    const view = render(<PageGroup sticky="bottom">test</PageGroup>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify top shadow', () => {
    const view = render(<PageGroup hasShadowTop>test</PageGroup>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify bottom shadow', () => {
    const view = render(<PageGroup hasShadowBottom>test</PageGroup>);
    expect(view.container).toMatchSnapshot();
  });
  test('Verify overflow scroll', () => {
    const view = render(<PageGroup hasOverflowScroll>test</PageGroup>);
    expect(view.container).toMatchSnapshot();
  });
});
