import React from 'react';
import { mount } from 'enzyme';
import { InfoTip } from './index';
import { ListGroup, ListGroupItem } from '../ListGroup';

const testInfoTip = () => (
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

test('InfoTip renders properly with item children', () => {
  const component = mount(
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

  expect(component.render()).toMatchSnapshot();
});

test('InfoTip renders properly with a default MenuItemIcon', () => {
  const component = mount(
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

  expect(component.render()).toMatchSnapshot();
});

test('InfoTip renders properly with another MenuItemIcon', () => {
  const component = mount(
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

  expect(component.render()).toMatchSnapshot();
});

test('InfoTip is a instance', () => {
  const component = mount(testInfoTip());

  expect(component.instance()).toBeTruthy();
});

test('InfoTip handleEnterKeyDown', () => {
  const component = mount(testInfoTip());
  const event = {
    preventDefault() {},
    key: 'Enter',
    keyCode: 13,
    which: 13
  };

  expect(component.state('wasEnabled')).toBeFalsy();
  expect(component.state('open')).toBeFalsy();

  component.simulate('keyDown', event);

  expect(component.state('open')).toBeTruthy();

  component.simulate('keyDown', event);

  expect(component.state('open')).toBeFalsy();
});

test('InfoTip handleTabKeyDown', () => {
  const component = mount(testInfoTip());
  const event = {
    stopPropagation() {},
    nativeEvent: {
      stopImmediatePropagation() {}
    },
    key: 'Tab',
    keyCode: 9,
    which: 9
  };

  expect(component.state('footerFocused')).toBeFalsy();

  // Should focus the Footer
  component.simulate('keyDown', event);

  expect(component.state('footerFocused')).toBeTruthy();

  component.setState({ open: true });
  // Should close the menu
  component.simulate('keyDown', event);

  expect(component.state('footerFocused')).toBeFalsy();
  expect(component.state('open')).toBeFalsy();
});

test('InfoTip handleClick', () => {
  const component = mount(testInfoTip());

  expect(component.state.open).toBeFalsy();

  // Should open the menu
  component.find('a#infotip-widget').simulate('click');

  expect(component.state('open')).toBeTruthy();

  // Should close the menu
  component.find('a#infotip-widget').simulate('click');

  expect(component.state('open')).toBeFalsy();
});

test('InfoTip handleBackFocus', () => {
  const component = mount(testInfoTip());
  component.setState({ open: true });

  // Should close the menu
  component.instance().handleBackFocus();
  expect(component.state('open')).toBeFalsy();

  // Should do nothing if the menus is not open
  component.instance().handleBackFocus();
  expect(component.state('open')).toBeFalsy();
});

test('InfoTip handleKeyDown', () => {
  const component = mount(testInfoTip());
  const eventEnterKey = {
    preventDefault() {},
    key: 'Enter',
    keyCode: 13,
    which: 13
  };

  component.setState({ open: true });
  component.simulate('keyDown', eventEnterKey);

  expect(component.state('open')).toBeFalsy();

  const eventTabKey = {
    stopPropagation() {},
    nativeEvent: {
      stopImmediatePropagation() {}
    },
    key: 'Tab',
    keyCode: 9,
    which: 9
  };
  component.setState({ footerFocused: false });
  component.simulate('keyDown', eventTabKey);

  expect(component.state('footerFocused')).toBeTruthy();

  component.simulate('keyDown', eventTabKey);

  expect(component.state('open')).toBeFalsy();
  expect(component.state('footerFocused')).toBeFalsy();

  const eventEscKey = {
    stopPropagation() {},
    nativeEvent: {
      stopImmediatePropagation() {}
    },
    key: 'Escape',
    keyCode: 27,
    which: 27
  };
  component.setState({ open: true });
  component.simulate('keyDown', eventEscKey);

  expect(component.state('open')).toBeFalsy();
});
