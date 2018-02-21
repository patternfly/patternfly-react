/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import { InfoTip } from './index';
import { ListGroup, ListGroupItem } from '../ListGroup';

test('InfoTip renders properly with item children', () => {
  const component = renderer.create(
    <InfoTip id="infotip-widget">
      <InfoTip.Toggle>Messages: 2</InfoTip.Toggle>
      <InfoTip.Menu>
        <ListGroup>
          <ListGroupItem>
            <InfoTip.MenuItemIcon type="pf" name="info" /> Added Datasources
            TestDS
          </ListGroupItem>
          <ListGroupItem>
            <InfoTip.MenuItemIcon type="pf" name="info" /> Modified Datasources
            ExampleDS
          </ListGroupItem>
        </ListGroup>
        <InfoTip.MenuFooter>
          <a href="#">Clear Messages</a>
        </InfoTip.MenuFooter>
      </InfoTip.Menu>
    </InfoTip>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('InfoTip renders properly with a default MenuItemIcon', () => {
  const component = renderer.create(
    <InfoTip id="infotip-widget">
      <InfoTip.Toggle>Messages: 2</InfoTip.Toggle>
      <InfoTip.Menu>
        <ListGroup>
          <ListGroupItem>
            <InfoTip.MenuItemIcon /> Added Datasources TestDS
          </ListGroupItem>
          <ListGroupItem>
            <InfoTip.MenuItemIcon /> Modified Datasources ExampleDS
          </ListGroupItem>
        </ListGroup>
        <InfoTip.MenuFooter>
          <a href="#">Clear Messages</a>
        </InfoTip.MenuFooter>
      </InfoTip.Menu>
    </InfoTip>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('InfoTip renders properly with another MenuItemIcon', () => {
  const component = renderer.create(
    <InfoTip id="infotip-widget">
      <InfoTip.Toggle bsRole="toggle">Messages: 2</InfoTip.Toggle>
      <InfoTip.Menu bsRole="menu">
        <ListGroup>
          <ListGroupItem>
            <InfoTip.MenuItemIcon type="pf" name="cube" /> Added Datasources
            TestDS
          </ListGroupItem>
          <ListGroupItem>
            <InfoTip.MenuItemIcon type="pf" name="check" /> Modified Datasources
            ExampleDS
          </ListGroupItem>
        </ListGroup>
        <InfoTip.MenuFooter>
          <a href="#">Clear Messages</a>
        </InfoTip.MenuFooter>
      </InfoTip.Menu>
    </InfoTip>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const component = renderer.create(
  <InfoTip id="infotip-widget">
    <InfoTip.Toggle>Messages: 2</InfoTip.Toggle>
    <InfoTip.Menu>
      <ListGroup>
        <ListGroupItem>
          <InfoTip.MenuItemIcon type="pf" name="info" /> Added Datasources
          TestDS
        </ListGroupItem>
        <ListGroupItem>
          <InfoTip.MenuItemIcon type="pf" name="info" /> Modified Datasources
          ExampleDS
        </ListGroupItem>
      </ListGroup>
      <InfoTip.MenuFooter>
        <a href="#">Clear Messages</a>
      </InfoTip.MenuFooter>
    </InfoTip.Menu>
  </InfoTip>
);

test('InfoTip is a instance', () => {
  var instance = component.getInstance();
  expect(instance).toBeTruthy();
});

test('InfoTip handleEnterKeyDown', () => {
  var instance = component.getInstance();
  var event = {
    preventDefault() {},
    key: 'Enter',
    keyCode: 13,
    which: 13
  };
  expect(instance.state.wasEnabled).toBeFalsy();
  expect(instance.state.open).toBeFalsy();
  instance.handleEnterKeyDown(event);
  expect(instance.state.open).toBeTruthy();
  instance.handleEnterKeyDown(event);
  expect(instance.state.open).toBeFalsy();
});

test('InfoTip handleTabKeyDown', () => {
  var instance = component.getInstance();
  var event = {
    stopPropagation() {},
    nativeEvent: {
      stopImmediatePropagation() {}
    },
    key: 'Tab',
    keyCode: 9,
    which: 9
  };
  expect(instance.state.footerFocused).toBeFalsy();
  // Should focus the Footer
  instance.handleTabKeyDown(event);
  expect(instance.state.footerFocused).toBeTruthy();
  instance.state.open = true;
  // Should close the menu
  instance.handleTabKeyDown(event);
  expect(instance.state.footerFocused).toBeFalsy();
  expect(instance.state.open).toBeFalsy();
});

test('InfoTip handleClick', () => {
  var instance = component.getInstance();
  var event = {
    preventDefault() {}
  };
  instance.state.open = false;

  // Should open the menu
  instance.handleClick(event);
  expect(instance.state.open).toBeTruthy();

  // Should close the menu
  instance.handleClick(event);
  expect(instance.state.open).toBeFalsy();
});

test('InfoTip handleBackFocus', () => {
  var instance = component.getInstance();
  instance.state.open = true;

  // Should close the menu
  instance.handleBackFocus();
  expect(instance.state.open).toBeFalsy();

  // Should do nothing if the menus is not open
  instance.handleBackFocus();
  expect(instance.state.open).toBeFalsy();
});

test('InfoTip handleKeyDown', () => {
  var instance = component.getInstance();
  var eventEnterKey = {
    preventDefault() {},
    key: 'Enter',
    keyCode: 13,
    which: 13
  };
  instance.state.open = true;
  instance.handleKeyDown(eventEnterKey);
  expect(instance.state.open).toBeFalsy();

  var eventTabKey = {
    stopPropagation() {},
    nativeEvent: {
      stopImmediatePropagation() {}
    },
    key: 'Tab',
    keyCode: 9,
    which: 9
  };
  instance.state.footerFocused = false;
  instance.handleKeyDown(eventTabKey);
  expect(instance.state.footerFocused).toBeTruthy();
  instance.handleKeyDown(eventTabKey);
  expect(instance.state.open).toBeFalsy();
  expect(instance.state.footerFocused).toBeFalsy();

  var eventEscKey = {
    stopPropagation() {},
    nativeEvent: {
      stopImmediatePropagation() {}
    },
    key: 'Escape',
    keyCode: 27,
    which: 27
  };
  instance.state.open = true;
  instance.handleKeyDown(eventEscKey);
  expect(instance.state.open).toBeFalsy();
});
