import React from 'react';
import { mount } from 'enzyme';
import { Icon } from '../../Icon';
import { AggregateStatusCount, AggregateStatusNotification, AggregateStatusNotifications } from './index';

test('Aggregate Status Card Count is working properly', () => {
  const component = mount(<AggregateStatusCount> 9 </AggregateStatusCount>);

  expect(component.render()).toMatchSnapshot();
});

test('Aggregate Status Notification is working properly', () => {
  const component = mount(
    <AggregateStatusNotification>
      {' '}
      <a href="#" className="add" data-toggle="tooltip" data-placement="top" title="Add Ipsum!">
        <Icon type="pf" name="add-circle-o" />
      </a>{' '}
    </AggregateStatusNotification>
  );

  expect(component.render()).toMatchSnapshot();
});

test('Aggregate Status Notifications is working properly', () => {
  const component = mount(<AggregateStatusNotifications>Card Content</AggregateStatusNotifications>);

  expect(component.render()).toMatchSnapshot();
});
