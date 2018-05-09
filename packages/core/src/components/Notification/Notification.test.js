import React from 'react';
import { mount } from 'enzyme';
import { Notification } from './index';

test('Notification is working properly', () => {
  const component = mount(
    <Notification>
      <div>Child</div>
    </Notification>
  );
  expect(component.render()).toMatchSnapshot();
});

test('Notification Content is working properly', () => {
  const component = mount(
    <Notification.Content>
      <div>Child</div>
    </Notification.Content>
  );
  expect(component.render()).toMatchSnapshot();
});

test('Notification Info is working properly', () => {
  const component = mount(<Notification.Info />);

  expect(component.render()).toMatchSnapshot();
});

test('Notification Info Right is working properly', () => {
  const component = mount(<Notification.InfoRight text="right" />);

  expect(component.render()).toMatchSnapshot();
});

test('Notification Info Left is working properly', () => {
  const component = mount(<Notification.InfoLeft text="left" />);

  expect(component.render()).toMatchSnapshot();
});

test('Notification Message is working properly', () => {
  const component = mount(
    <Notification.Message>
      <div>Child</div>
    </Notification.Message>
  );
  expect(component.render()).toMatchSnapshot();
});
