import React from 'react';
import LoginBoxHeader from './LoginBoxHeader';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<LoginBoxHeader />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginBoxHeader className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'loginbox-header';
  const view = shallow(<LoginBoxHeader data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});
