import React from 'react';
import { CardFooter } from './CardFooter';
import { shallow, mount } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<CardFooter />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<CardFooter className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'card-footer';
  const view = shallow(<CardFooter data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('allows passing in a string as the component', () => {
  const component = 'div';
  const view = mount(<CardFooter component={component} />);
  expect(view.find(component).type()).toBe(component);
});

test('allows passing in a React Component as the component', () => {
  const Component = () => <div>im a div</div>;
  const view = mount(<CardFooter component={Component} />);
  expect(view.find(Component).type()).toBe(Component);
});
