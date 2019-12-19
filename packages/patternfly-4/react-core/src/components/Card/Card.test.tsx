import React from 'react';
import { Card } from './Card';
import { shallow, mount } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<Card />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<Card className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'card';
  const view = shallow(<Card data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('allows passing in a string as the component', () => {
  const component = 'section';
  const view = mount(<Card component={component} />);
  expect(view.find(component).type()).toBe(component);
});

test('allows passing in a React Component as the component', () => {
  const Component = () => <div>im a div</div>;
  const view = mount(<Card component={Component} />);
  expect(view.find(Component).type()).toBe(Component);
});

test('card with isHoverable applied ', () => {
  const view = shallow(<Card isHoverable />);
  expect(view).toMatchSnapshot();
});

test('card with isCompact applied ', () => {
  const view = shallow(<Card isCompact />);
  expect(view).toMatchSnapshot();
});
