import * as React from 'react';
import { shallow } from 'enzyme';
import { Bullseye } from '../Bullseye';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('Bullseye should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Bullseye
      children={<>ReactNode</>}
			className={"''"}
			component={'div'}
    />);
  expect(view).toMatchSnapshot();
});

test('renders with PatternFly Core styles', () => {
  const view = shallow(<Bullseye />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<Bullseye className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'bullseye';
  const view = shallow(<Bullseye data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('allows passing in a string as the component', () => {
  const component = 'div';
  const view = shallow(<Bullseye component={component} />);
  expect(view.type()).toBe(component);
});

test('allows passing in a React Component as the component', () => {
  const Component = () => null as any;
  const view = shallow(<Bullseye component={Component} />);
  expect(view.type()).toBe(Component);
});
