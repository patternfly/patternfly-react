import React from 'react';
import { NotificationDrawerList } from '../NotificationDrawerList';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = render(<NotificationDrawerList />);
  expect(view.container).toMatchSnapshot();
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
  const view = render(<NotificationDrawerList hidden />);
  expect(view.container).toMatchSnapshot();
});
