import { NotificationBadge } from '../NotificationBadge';
import React from 'react';
import { shallow } from 'enzyme';

Object.values([true, false]).forEach(isRead => {
  test(`${isRead} NotificationBadge`, () => {
    const view = shallow(<NotificationBadge isRead={isRead} />);
    expect(view).toMatchSnapshot();
  });
});

Object.values([true, false]).forEach(attentionVariant => {
  test(`${attentionVariant} NotificationBadge needs attention`, () => {
    const view = shallow(<NotificationBadge variant='attention'>{attentionVariant ? 'needs attention' : 'does not need attention'} Badge</NotificationBadge>);
    expect(view).toMatchSnapshot();
  });
});

test(`NotificationBadge count`, () => {
  const view = shallow(<NotificationBadge variant='read' count={3} />);
  expect(view).toMatchSnapshot();
});
