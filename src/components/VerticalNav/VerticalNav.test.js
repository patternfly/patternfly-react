import React from 'react';
import renderer from 'react-test-renderer';

import { VerticalNav } from './index';

import { mockNavItems } from './__mocks__/mockNavItems';
import { MockIconBarChildren } from './__mocks__/mockIconBarChildren';
import { basicExample } from './__mocks__/basicExample';

const { Masthead, Brand, IconBar } = VerticalNav;

console.warn = jest.genMockFunction(); // eslint-disable-line no-console

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

test('VerticalNav renders properly with a custom className on a nav item', () => {
  const component = renderer.create(basicExample(null, 'my-custom-item'));
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
        <IconBar>
          <MockIconBarChildren />
        </IconBar>
      </Masthead>
    </VerticalNav>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// Note: in the future it would be nice to unit test all those component class methods too...
