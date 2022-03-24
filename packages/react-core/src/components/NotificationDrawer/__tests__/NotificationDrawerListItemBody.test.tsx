import React from 'react';
import { NotificationDrawerListItemBody } from '../NotificationDrawerListItemBody';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = render(<NotificationDrawerListItemBody />);
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<NotificationDrawerListItemBody className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('list item body with timestamp property applied ', () => {
  const view = render(<NotificationDrawerListItemBody timestamp="5 minutes ago" />);
  expect(view.container).toMatchSnapshot();
});
