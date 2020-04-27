import React from 'react';
import { NotificationDrawerList } from '../NotificationDrawerList';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<NotificationDrawerList />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<NotificationDrawerList className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'notification-drawer';
  const view = shallow(<NotificationDrawerList data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('drawer list with hidden applied ', () => {
  const view = shallow(<NotificationDrawerList hidden />);
  expect(view).toMatchSnapshot();
});
