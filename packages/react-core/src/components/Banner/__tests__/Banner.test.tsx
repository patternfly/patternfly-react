import { Banner } from '../Banner';
import React from 'react';
import { mount } from 'enzyme';

['default', 'info', 'success', 'warning', 'danger'].forEach(
  (variant: 'default' | 'info' | 'success' | 'warning' | 'danger') => {
    test(`${variant} banner`, () => {
      const view = mount(
        <Banner variant={variant} aria-label={variant}>
          {variant} Banner
        </Banner>
      );
      expect(view).toMatchSnapshot();
    });
  }
);

test(`sticky banner`, () => {
  const view = mount(
    <Banner aria-label="sticky" isSticky>
      Sticky Banner
    </Banner>
  );
  expect(view).toMatchSnapshot();
});
