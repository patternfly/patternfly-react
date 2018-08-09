/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
import VncActions from './VncActions';

test('placeholder render test', () => {
  const view = shallow(<VncActions />);
  expect(view).toMatchSnapshot();
});

test('VncActions renders correctly component hierarchy', () => {
  const view = shallow(
    <VncActions textSendShortcut="My Send Shortcut description" textCtrlAltDel="foobar" onCtrlAltDel={jest.fn()} />
  );
  expect(view).toMatchSnapshot();
});

test('VncActions renders correctly html', () => {
  const view = shallow(
    <VncActions textSendShortcut="My Send Shortcut description" textCtrlAltDel="foobar" onCtrlAltDel={jest.fn()} />
  );
  expect(view.html()).toMatchSnapshot();
});

test('VncActions calls ctrl+alt+del action', () => {
  const onCtrlAltDel = jest.fn();

  const wrapper = mount(
    <VncActions
      textSendShortcut="My Send Shortcut description"
      textCtrlAltDel="CtrlAltDel"
      onCtrlAltDel={onCtrlAltDel}
    />
  );

  const button = wrapper.find('a[role="menuitem"]');
  expect(button).toHaveLength(1);
  button.simulate('click');
  expect(onCtrlAltDel).toHaveBeenCalledTimes(1);
});
