import React from 'react';
import { NotificationDrawerGroup } from '../NotificationDrawerGroup';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = render(<NotificationDrawerGroup count={2} isExpanded={false} title="Critical Alerts" />);
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(
    <NotificationDrawerGroup count={2} isExpanded={false} title="Critical Alerts" className="extra-class" />
  );
  expect(view.prop('className')).toMatchSnapshot();
});

test('extra props are spread to the root element', () => {
  const testId = 'notification-drawer';
  const view = shallow(
    <NotificationDrawerGroup count={2} isExpanded={false} title="Critical Alerts" data-testid={testId} />
  );
  expect(view.prop('data-testid')).toBe(testId);
});

test('drawer group with isExpanded applied ', () => {
  const view = render(<NotificationDrawerGroup count={2} isExpanded title="Critical Alerts" />);
  expect(view.container).toMatchSnapshot();
});

test('drawer group with isRead applied ', () => {
  const view = render(<NotificationDrawerGroup count={2} isExpanded={false} isRead={true} title="Critical Alerts" />);
  expect(view.container).toMatchSnapshot();
});
