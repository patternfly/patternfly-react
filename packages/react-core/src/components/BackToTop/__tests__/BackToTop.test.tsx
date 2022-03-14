import React from 'react';
import { render } from '@testing-library/react';
import { BackToTop } from '../BackToTop';

describe('BackToTop', () => {
  test('verify basic', () => {
    const view = render(<BackToTop />);
    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const view = render(<BackToTop className="custom-css">test</BackToTop>);

    expect(view.container.outerHTML).toMatchSnapshot();
  });

  test('verify always show', () => {
    const view = render(<BackToTop isAlwaysVisible>test</BackToTop>);

    expect(view.container.outerHTML).toMatchSnapshot();
  });
});
