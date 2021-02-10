import React from 'react';
import { Card } from '../Card';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<Card />).dive();
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<Card className="extra-class" />).dive();
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'card';
  const view = shallow(<Card data-testid={testId} />).dive();
  expect(view.prop('data-testid')).toBe(testId);
});

test('allows passing in a string as the component', () => {
  const component = 'section';
  const view = shallow(<Card component={component} />).dive();
  expect(view.type()).toBe(component);
});

test('allows passing in a React Component as the component', () => {
  const Component = () => <div>im a div</div>;
  const view = shallow(<Card component={Component} />).dive();
  expect(view.type()).toBe(Component);
});

test('card with isHoverable applied ', () => {
  const view = shallow(<Card isHoverable />).dive();
  expect(view).toMatchSnapshot();
});

test('card with isCompact applied ', () => {
  const view = shallow(<Card isCompact />).dive();
  expect(view).toMatchSnapshot();
});

test('card with isSelectable applied ', () => {
  const view = shallow(<Card isSelectable />).dive();
  expect(view.prop('className')).toMatch(/selectable/);
  expect(view.prop('tabIndex')).toBe('0');
});

test('card with isSelectable and isSelected applied ', () => {
  const view = shallow(<Card isSelectable isSelected />).dive();
  expect(view.prop('className')).toMatch(/selectable/);
  expect(view.prop('className')).toMatch(/selected/);
  expect(view.prop('tabIndex')).toBe('0');
});

test('card with only isSelected applied - not change', () => {
  const view = shallow(<Card isSelected />).dive();
  expect(view.prop('className')).not.toMatch(/selected/);
  expect(view.prop('tabIndex')).toBe(undefined);
});

test('card with isFlat applied', () => {
  const view = shallow(<Card isFlat />).dive();
  expect(view.prop('className')).toMatch(/m-flat/);
});

test('card with isExpanded applied', () => {
  const view = shallow(<Card isExpanded />).dive();
  expect(view.prop('className')).toMatch(/m-expanded/);
});

test('card with isRounded applied', () => {
  const view = shallow(<Card isRounded />).dive();
  expect(view.prop('className')).toMatch(/m-rounded/);
});

test('card with isLarge applied', () => {
  const view = shallow(<Card isLarge />).dive();
  expect(view.prop('className')).toMatch(/m-display-lg/);
});

test('card warns when isLarge and isCompact', () => {
  const consoleWarnMock = jest.fn();
  global.console = { warn: consoleWarnMock } as any;
  shallow(<Card isLarge isCompact />);
  expect(consoleWarnMock).toBeCalled();
});


