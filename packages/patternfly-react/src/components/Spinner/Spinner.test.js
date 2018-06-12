import React from 'react';
import { mount } from 'enzyme';
import { Spinner } from './index';

test('Spinner should not render children when loading', () => {
  const component = mount(
    <Spinner loading>
      <span>Children should not render.</span>
    </Spinner>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Spinner should render children when not loading', () => {
  const component = mount(
    <Spinner size="lg">
      <span>Children should be rendered.</span>
    </Spinner>
  );

  expect(component.render()).toMatchSnapshot();
});
