import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from '../../Icon';
import {
  AggregateStatusCount,
  AggregateStatusNotification,
  AggregateStatusNotifications
} from './index';

test('Aggregate Status Card Count is working properly', () => {
  const component = renderer.create(
    <AggregateStatusCount> 9 </AggregateStatusCount>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Aggregate Status Notification is working properly', () => {
  const component = renderer.create(
    <AggregateStatusNotification>
      {' '}
      <a
        href="#"
        className="add"
        data-toggle="tooltip"
        data-placement="top"
        title="Add Ipsum!"
      >
        <Icon type="pf" name="add-circle-o" />
      </a>{' '}
    </AggregateStatusNotification>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Aggregate Status Notifications is working properly', () => {
  const component = renderer.create(
    <AggregateStatusNotifications>Card Content</AggregateStatusNotifications>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
