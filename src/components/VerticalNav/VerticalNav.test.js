import React from 'react';
import { mount } from 'enzyme';

import { VerticalNav } from './index';

import { mockNavItems } from './__mocks__/mockNavItems';
import { MockIconBarChildren } from './__mocks__/mockIconBarChildren';
import { basicExample } from './__mocks__/basicExample';

const { Masthead, Brand, IconBar } = VerticalNav;

console.warn = jest.genMockFunction(); // eslint-disable-line no-console

test('VerticalNav renders properly with item children', () => {
  const component = mount(basicExample());

  expect(component.render()).toMatchSnapshot();
});

test('VerticalNav renders properly in mobile mode', () => {
  const component = mount(basicExample({ isMobile: true }));

  expect(component.render()).toMatchSnapshot();
});

test('VerticalNav renders properly with a custom className on a nav item', () => {
  const component = mount(basicExample(null, 'my-custom-item'));

  expect(component.render()).toMatchSnapshot();
});

test('VerticalNav renders properly with item objects', () => {
  const component = mount(
    <VerticalNav items={mockNavItems} pinnableMenus>
      <Masthead>
        <Brand
          iconImg="../../../storybook/img/logo-alt.svg"
          titleImg="../../../storybook/img/brand-alt.svg"
        />
        <IconBar>
          <MockIconBarChildren />
        </IconBar>
      </Masthead>
    </VerticalNav>
  );

  expect(component.render()).toMatchSnapshot();
});

// Note: in the future it would be nice to unit test all those component class methods too...
