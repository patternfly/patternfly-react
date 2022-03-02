import React from 'react';
import { NotificationDrawerHeader } from '../NotificationDrawerHeader';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = render(<NotificationDrawerHeader />);
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<NotificationDrawerHeader className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'notification-drawer';
  const view = shallow(<NotificationDrawerHeader data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});

test('drawer header with count applied', () => {
  const view = render(<NotificationDrawerHeader count={2} />);
  expect(view.container).toMatchSnapshot();
});

test('drawer header with title applied', () => {
  const view = render(<NotificationDrawerHeader title="Notifications" />);
  expect(view.container).toMatchSnapshot();
});

test('drawer header with custom unread text applied', () => {
  const view = render(<NotificationDrawerHeader customText="2 unread alerts" />);
  expect(view.container).toMatchSnapshot();
});
