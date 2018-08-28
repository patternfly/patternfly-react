import Button, { ButtonVariant } from './Button';
import React from 'react';
import { shallow } from 'enzyme';

Object.values(ButtonVariant).forEach(variant => {
  test(`${variant} button`, () => {
    const view = shallow(
      <Button variant={variant} aria-label={variant}>
        {variant} Button
      </Button>
    );
    expect(view).toMatchSnapshot();
  });
});

test('it adds an aria-label to plain buttons', () => {
  const label = 'aria-label test';
  const view = shallow(<Button variant={ButtonVariant.action} aria-label={label} />);
  expect(view.find('button').props()['aria-label']).toBe(label);
});

test('isBlock', () => {
  const view = shallow(<Button isBlock>Block Button</Button>);
  expect(view).toMatchSnapshot();
});

test('isDisabled', () => {
  const view = shallow(<Button isDisabled>Disabled Button</Button>);
  expect(view).toMatchSnapshot();
});

test('isFocus', () => {
  const view = shallow(<Button isFocus>Focused Button</Button>);
  expect(view).toMatchSnapshot();
});

test('isHover', () => {
  const view = shallow(<Button isHover>Hovered Button</Button>);
  expect(view).toMatchSnapshot();
});

test('allows passing in a string as the component', () => {
  const component = 'a';
  const view = shallow(<Button component={component} />);
  expect(view.type()).toBe(component);
});

test('allows passing in a React Component as the component', () => {
  const Component = () => null;
  const view = shallow(<Button component={Component} />);
  expect(view.type()).toBe(Component);
});

test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', () => {
  const view = shallow(
    <Button component="a" isDisabled>
      Disabled Anchor Button
    </Button>
  );
  expect(view).toMatchSnapshot();
});
