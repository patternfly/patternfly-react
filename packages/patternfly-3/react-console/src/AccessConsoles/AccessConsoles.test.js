import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { noop } from 'patternfly-react';

import { AccessConsoles } from './index';
import { SerialConsole } from '../SerialConsole';
import { SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE } from '../common/constants';
import { LOADING } from '../SerialConsole/constants';
import { VncConsole } from '../VncConsole';

const MyVncConsoleTestWrapper = () => <p>This can be VncConsole component or a wrapper</p>;

test('AccessConsoles with SerialConsole as a single child', () => {
  const view = shallow(
    <AccessConsoles>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
    </AccessConsoles>
  );
  expect(view).toMatchSnapshot();
});

test('AccessConsoles with VncConsole as a single child', () => {
  const view = shallow(
    <AccessConsoles>
      <VncConsole host="foo.bar.host" textDisconnected="Disconnected state text" />
    </AccessConsoles>
  );
  expect(view).toMatchSnapshot();
});

test('AccessConsoles with SerialConsole and VncConsole as children', () => {
  const view = shallow(
    <AccessConsoles>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <VncConsole host="foo.bar.host" textDisconnected="Disconnected state text" />
    </AccessConsoles>
  );
  expect(view).toMatchSnapshot();
});

const SerialConsoleConnected = () => (
  <p>
    Whatever component, preferably wrapping <i>SerialConsole</i> with callbacks adapted to a particular backend.
  </p>
);

test('AccessConsoles with wrapped SerialConsole as a child', () => {
  const view = shallow(
    <AccessConsoles>
      <SerialConsoleConnected type={SERIAL_CONSOLE_TYPE} />
    </AccessConsoles>
  );
  expect(view).toMatchSnapshot();
});

test('AccessConsoles switching SerialConsole and VncConsole', () => {
  const wrapper = mount(
    <AccessConsoles>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </AccessConsoles>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('SerialConsole')).toHaveLength(0);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(0);

  const button = wrapper.find('button #console-type-selector');
  expect(button).toHaveLength(1);
  button.simulate('click');
  expect(wrapper.find('SerialConsole')).toHaveLength(0);

  let consoleItems = wrapper.find('ul li');
  expect(consoleItems).toHaveLength(2);
  consoleItems
    .first()
    .find('a')
    .simulate('click');
  expect(consoleItems).toMatchSnapshot();
  expect(wrapper.find('SerialConsole')).toHaveLength(1);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(0);

  consoleItems = wrapper.find('ul li');
  expect(consoleItems).toHaveLength(2);
  consoleItems
    .at(1)
    .find('a')
    .simulate('click');
  expect(consoleItems).toMatchSnapshot();
  expect(wrapper.find('SerialConsole')).toHaveLength(0);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(1);
});

test('AccessConsoles default setting', () => {
  const wrapperDefault = mount(
    <AccessConsoles>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </AccessConsoles>
  );
  expect(wrapperDefault.find('.console-selector-pf-disconnect-switch')).toHaveLength(0);

  const wrapperKeepConnection = mount(
    <AccessConsoles disconnectByChange={false}>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </AccessConsoles>
  );
  expect(wrapperKeepConnection.find('.console-selector-pf-disconnect-switch')).toHaveLength(0); // not rendered when no type selected
  wrapperKeepConnection.find('button #console-type-selector').simulate('click');
  wrapperKeepConnection
    .find('ul li')
    .first()
    .find('a')
    .simulate('click'); // Select SerialConsole
  expect(wrapperKeepConnection.find('label.console-selector-pf-disconnect-switch')).toHaveLength(1); // switch should be rendered now
});

test('AccessConsoles disconnects when switching types', () => {
  const wrapper = mount(
    <AccessConsoles>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </AccessConsoles>
  );

  expect(wrapper.find('SerialConsole')).toHaveLength(0);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(0);

  wrapper.find('button #console-type-selector').simulate('click');
  wrapper
    .find('ul li')
    .first()
    .find('a')
    .simulate('click'); // Select SerialConsole

  expect(wrapper.find('SerialConsole')).toHaveLength(1);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(0);

  wrapper.find('button #console-type-selector').simulate('click');
  wrapper
    .find('ul li')
    .at(1)
    .find('a')
    .simulate('click'); // Select VncConsole

  expect(wrapper.find('SerialConsole')).toHaveLength(0);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(1);
});

test('AccessConsoles keeps connection when switching types', () => {
  const wrapper = mount(
    <AccessConsoles disconnectByChange={false}>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </AccessConsoles>
  );

  expect(wrapper.find('SerialConsole')).toHaveLength(0);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(0);

  wrapper.find('button #console-type-selector').simulate('click');
  wrapper
    .find('ul li')
    .first()
    .find('a')
    .simulate('click'); // Select SerialConsole

  expect(wrapper.find('SerialConsole')).toHaveLength(1);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(0);

  wrapper.find('button #console-type-selector').simulate('click');
  wrapper
    .find('ul li')
    .at(1)
    .find('a')
    .simulate('click'); // Select VncConsole

  expect(wrapper.find('SerialConsole')).toHaveLength(1);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(1);
  expect(wrapper.find('div[hidden] div.console-terminal-pf')).toHaveLength(1); // SerialConsole is rendered but hidden
  expect(wrapper.find('div MyVncConsoleTestWrapper')).toHaveLength(1); // MyVncConsoleTestWrapper is rendered and visible
  expect(wrapper).toMatchSnapshot();
});

test('Empty AccessConsoles', () => {
  const view = render(<AccessConsoles />);
  expect(view).toMatchSnapshot();
});
