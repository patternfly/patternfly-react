import React from 'react';
import Alignment from './Alignment';
import { shallow } from 'enzyme';

test('allows passing in a string as the component', () => {
  const component = 'div';
  const view = shallow(<Alignment component={component} />);
  expect(view.type()).toBe(component);
});

test('allows passing in a React Component as the component', () => {
  const Component = () => null;
  const view = shallow(<Alignment component={Component} />);
  expect(view.type()).toBe(Component);
});

test('right alignment', () => {
  const view = shallow(<Alignment align="right" />);
  expect(view).toMatchSnapshot();
});

test('left alignment', () => {
  const view = shallow(<Alignment align="left" />);
  expect(view).toMatchSnapshot();
});

test('center alignment', () => {
  const view = shallow(<Alignment align="center" />);
  expect(view).toMatchSnapshot();
});
