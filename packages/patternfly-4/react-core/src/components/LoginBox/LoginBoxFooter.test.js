import React from 'react';
import LoginBoxFooter from './LoginBoxFooter';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<LoginBoxFooter />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<LoginBoxFooter className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'loginbox-body';
  const view = shallow(<LoginBoxFooter data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});
