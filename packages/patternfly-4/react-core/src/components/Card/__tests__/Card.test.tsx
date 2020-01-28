import * as React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../Card';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

it('Card should match snapshot (auto-generated)', () => {
  const view = shallow(
    <Card
      children={<>ReactNode</>}
			className={"''"}
			component={'article'}
			isHoverable={false}
			isCompact={false}
    />);
  expect(view).toMatchSnapshot();
});

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
  const view = shallow(<Card component={component} />);
  expect(view.type()).toBe(component);
});

test('allows passing in a React Component as the component', () => {
  const Component = () => <div>im a div</div>;
  const view = shallow(<Card component={Component} />);
  expect(view.type()).toBe(Component);
});

test('card with isHoverable applied ', () => {
  const view = shallow(<Card isHoverable />);
  expect(view).toMatchSnapshot();
});

test('card with isCompact applied ', () => {
  const view = shallow(<Card isCompact />);
  expect(view).toMatchSnapshot();
});
