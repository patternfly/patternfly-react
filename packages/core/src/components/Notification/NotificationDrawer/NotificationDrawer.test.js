import React from 'react';
import { mount } from 'enzyme';
import { NotificationDrawer } from './index';

test('NotificationDrawer is working properly', () => {
  const component = mount(
    <NotificationDrawer>
      <div>Child</div>
    </NotificationDrawer>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Title is working properly', () => {
  const component = mount(<NotificationDrawer.Title />);

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Accordion is working properly', () => {
  const component = mount(
    <NotificationDrawer.Accordion>
      <div>Child</div>
    </NotificationDrawer.Accordion>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Toggle is working properly', () => {
  const component = mount(<NotificationDrawer.Toggle />);

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Dropdown is working properly', () => {
  const component = mount(
    <NotificationDrawer.Dropdown id="1">
      <div>Child</div>
    </NotificationDrawer.Dropdown>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Panel is working properly', () => {
  const component = mount(
    <NotificationDrawer.Panel expanded>
      <div>Child</div>
    </NotificationDrawer.Panel>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Panel Action and Link is working properly', () => {
  const component = mount(
    <NotificationDrawer.PanelAction>
      <NotificationDrawer.PanelActionLink>
        <div>Child</div>
      </NotificationDrawer.PanelActionLink>
    </NotificationDrawer.PanelAction>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Panel Body is working properly', () => {
  const component = mount(
    <NotificationDrawer.PanelBody maxHeight={350}>
      <div>Child</div>
    </NotificationDrawer.PanelBody>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Panel Collapse is working properly', () => {
  const component = mount(
    <NotificationDrawer.PanelCollapse collapseIn>
      <div>Child</div>
    </NotificationDrawer.PanelCollapse>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Panel Counter is working properly', () => {
  const component = mount(
    <NotificationDrawer.PanelCounter>
      <div>Child</div>
    </NotificationDrawer.PanelCounter>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Panel Heading is working properly', () => {
  const component = mount(
    <NotificationDrawer.PanelHeading>
      <div>Child</div>
    </NotificationDrawer.PanelHeading>
  );

  expect(component.render()).toMatchSnapshot();
});

test('NotificationDrawer Panel Title is working properly', () => {
  const component = mount(<NotificationDrawer.PanelTitle />);

  expect(component.render()).toMatchSnapshot();
});
