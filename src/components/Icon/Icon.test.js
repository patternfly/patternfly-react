import React from 'react';
import { mount } from 'enzyme';
import { Icon } from './index';

test('patternfly Icon is working', () => {
  const component = mount(<Icon type="pf" name="ok" />);

  expect(component.render()).toMatchSnapshot();
});

test('fontawesome Icon is working', () => {
  const component = mount(<Icon name="angle-down" />);

  expect(component.render()).toMatchSnapshot();
});
