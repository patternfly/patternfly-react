import React from 'react';
import LoginMainHeader from './LoginMainHeader';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<LoginMainHeader />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginMainHeader className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'login-header';
  const view = shallow(<LoginMainHeader data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});
