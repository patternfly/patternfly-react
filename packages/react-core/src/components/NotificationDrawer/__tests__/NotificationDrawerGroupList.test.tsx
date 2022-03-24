import React from 'react';
import { NotificationDrawerGroupList } from '../NotificationDrawerGroupList';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = render(<NotificationDrawerGroupList />);
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<NotificationDrawerGroupList className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'notification-drawer';
  const view = shallow(<NotificationDrawerGroupList data-testid={testId} />);
  expect(view.prop('data-testid')).toBe(testId);
});
