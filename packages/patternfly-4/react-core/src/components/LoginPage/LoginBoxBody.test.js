import React from 'react';
import LoginBoxBody from './LoginBoxBody';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<LoginBoxBody />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginBoxBody className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'loginbox-body';
  const view = shallow(<LoginBoxBody data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});
