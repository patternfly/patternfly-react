/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';
import SpiceActions from './SpiceActions';

test('placeholder render test', () => {
  const view = shallow(<SpiceActions />);
  expect(view).toMatchSnapshot();
});

test('SpiceActions renders correctly component hierarchy', () => {
  const view = shallow(
    <SpiceActions textSendShortcut="My Send Shortcut description" textCtrlAltDel="foobar" onCtrlAltDel={jest.fn()} />
  );
  expect(view).toMatchSnapshot();
});

test('SpiceActions renders correctly html', () => {
  const view = shallow(
    <SpiceActions textSendShortcut="My Send Shortcut description" textCtrlAltDel="foobar" onCtrlAltDel={jest.fn()} />
  );
  expect(view.html()).toMatchSnapshot();
});

test('SpiceActions calls ctrl+alt+del action', () => {
  const onCtrlAltDel = jest.fn();

  const wrapper = mount(
    <SpiceActions
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
