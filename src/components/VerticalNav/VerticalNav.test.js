import React from 'react';
import renderer from 'react-test-renderer';

import { VerticalNav } from './index';

import { mockNavItems } from './__mocks__/mockNavItems';
import { mockIconBarChildren } from './__mocks__/mockIconBarChildren';
import { basicExample } from './__mocks__/basicExample';

const { Masthead, Brand, IconBar } = VerticalNav;

test('VerticalNav renders properly with item children', () => {
  const component = renderer.create(basicExample());
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('VerticalNav renders properly in mobile mode', () => {
  const component = renderer.create(basicExample({ isMobile: true }));
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('VerticalNav renders properly with item objects', () => {
  const component = renderer.create(
    <VerticalNav items={mockNavItems} pinnableMenus>
      <Masthead>
        <Brand
          iconImg="../../../storybook/img/logo-alt.svg"
          titleImg="../../../storybook/img/brand-alt.svg"
        />
        <IconBar>{mockIconBarChildren}</IconBar>
      </Masthead>
    </VerticalNav>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Note: in the future it would be nice to unit test all those component class methods too...
