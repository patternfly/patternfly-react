import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { VncActions } from '../VncActions';

test('placeholder render test', () => {
  const view = render(<VncActions onCtrlAltDel={jest.fn()} onDisconnect={jest.fn()} />);
  expect(view.container).toMatchSnapshot();
});

test('VncActions renders correctly component hierarchy', () => {
  const view = render(
    <VncActions
      textSendShortcut="My Send Shortcut description"
      textCtrlAltDel="foobar"
      onCtrlAltDel={jest.fn()}
      onDisconnect={jest.fn()}
    />
  );
  expect(view.container).toMatchSnapshot();
});

test('VncActions renders correctly html', () => {
  const view = render(
    <VncActions
      textSendShortcut="My Send Shortcut description"
      textCtrlAltDel="foobar"
      onCtrlAltDel={jest.fn()}
      onDisconnect={jest.fn()}
    />
  );
  expect(view.container).toMatchSnapshot();
});

test('VncActions calls ctrl+alt+del action', () => {
  const onCtrlAltDel = jest.fn();

  const wrapper = mount(
    <VncActions
      textSendShortcut="My Send Shortcut description"
      textCtrlAltDel="CtrlAltDel"
      onCtrlAltDel={onCtrlAltDel}
      onDisconnect={jest.fn()}
    />
  );

  const button = wrapper.find('button.pf-c-dropdown__toggle');
  button.simulate('click');
  expect(wrapper.find('ul li')).toHaveLength(1);
  wrapper
    .find('ul li a')
    .simulate('click');
  expect(onCtrlAltDel).toHaveBeenCalledTimes(1);
});
