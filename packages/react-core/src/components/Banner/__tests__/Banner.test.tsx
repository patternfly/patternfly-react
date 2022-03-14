import { Banner } from '../Banner';
import React from 'react';
import { render } from '@testing-library/react';

['default', 'info', 'success', 'warning', 'danger'].forEach(
  (variant: 'default' | 'info' | 'success' | 'warning' | 'danger') => {
    test(`${variant} banner`, () => {
      const view = render(
        <Banner variant={variant} aria-label={variant}>
          {variant} Banner
        </Banner>
      );
      expect(view.container.outerHTML).toMatchSnapshot();
    });
  }
);

test(`sticky banner`, () => {
  const view = render(
    <Banner aria-label="sticky" isSticky>
      Sticky Banner
    </Banner>
  );
  expect(view.container.outerHTML).toMatchSnapshot();
});
