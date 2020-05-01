import React from 'react';
import { NotificationDrawerListItem } from '../NotificationDrawerListItem';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<NotificationDrawerListItem />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<NotificationDrawerListItem className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'notification-drawer';
  const view = shallow(<NotificationDrawerListItem data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('drawer list item with isHoverable applied ', () => {
  const view = shallow(<NotificationDrawerListItem isHoverable />);
  expect(view.prop('className')).toMatch(/hoverable/);
});

test('drawer list item with isRead applied ', () => {
  const view = shallow(<NotificationDrawerListItem isRead />);
  expect(view.prop('className')).toMatch(/read/);
});

test('drawer list item with tabIndex value applied ', () => {
  const view = shallow(<NotificationDrawerListItem tabIndex={4} />);
  expect(view.prop('tabIndex')).toBe(4);
});
