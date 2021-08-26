import React from 'react';
import BellIcon from '@patternfly/react-icons/dist/esm/icons/bell-icon';
import { NotificationDrawerListItemHeader } from '../NotificationDrawerListItemHeader';
import { shallow } from 'enzyme';

test('renders with PatternFly Core styles', () => {
  const view = shallow(<NotificationDrawerListItemHeader title="Pod quit unexpectedly"/>);
  expect(view).toMatchSnapshot();
});

test('className is added to the root element', () => {
  const view = shallow(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" className="extra-class" />);
  expect(view.prop('className')).toMatchSnapshot();
});

test('list item header with custom icon applied ', () => {
  const view = shallow(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" icon={<BellIcon />} />);
  expect(view).toMatchSnapshot();
});

test('list item header with srTitle applied ', () => {
  const view = shallow(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" srTitle="screen reader title" />);
  expect(view).toMatchSnapshot();
});

test('list item header with variant applied ', () => {
  const view = shallow(<NotificationDrawerListItemHeader title="Pod quit unexpectedly" variant="success" />);
  expect(view).toMatchSnapshot();
});

test('list item header with truncateTitle', () => {
  const view = shallow(<NotificationDrawerListItemHeader truncateTitle={1} title="Pod quit unexpectedly" variant="success" />);
  expect(view.find('h2').prop('className')).toContain('pf-m-truncate');
});
