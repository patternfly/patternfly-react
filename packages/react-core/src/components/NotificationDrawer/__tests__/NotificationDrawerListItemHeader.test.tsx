import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import { NotificationDrawerListItemHeader } from '../NotificationDrawerListItemHeader';

test('renders with PatternFly Core styles', () => {
  const view = render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly"/>);
  expect(view.container).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = mount(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('list item header with custom icon applied ', () => {
  const view = render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" icon={<BellIcon />} />);
  expect(view.container).toMatchSnapshot();
});

test('list item header with srTitle applied ', () => {
  const view = render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" srTitle="screen reader title" />);
  expect(view.container).toMatchSnapshot();
});

test('list item header with variant applied ', () => {
  const view = render(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" variant="success" />);
  expect(view.container).toMatchSnapshot();
});

test('list item header with truncateTitle', () => {
  const view = mount(<NotificationDrawerListItemHeader truncateTitle={1} title="Pod quit unexpectedly" variant="success" />);
  expect(view.find('h2').prop('className')).toContain('pf-m-truncate');
});
