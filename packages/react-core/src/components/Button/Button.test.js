import Button, { ButtonVariant } from './Button';
import React from 'react';
import { shallow } from 'enzyme';

Object.values(ButtonVariant).forEach(variant => {
  test(`${variant} button`, () => {
    const view = shallow(<Button variant={variant}>{variant} Button</Button>);
    expect(view).toMatchSnapshot();
  });
});

test('it adds an aria-label to action buttons', () => {
  const label = 'aria-label test';
  const view = shallow(<Button variant={ButtonVariant.action} label={label} />);
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
