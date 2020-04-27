import React from 'react';
import { NotificationDrawerListItemBody } from '../NotificationDrawerListItemBody';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<NotificationDrawerListItemBody />);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<NotificationDrawerListItemBody className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('list item body with timestamp property applied ', () => {
  const view = shallow(<NotificationDrawerListItemBody timestamp="5 minutes ago" />);
  expect(view).toMatchSnapshot();
});
