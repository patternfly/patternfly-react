import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { noop } from 'patternfly-react';

import ConsoleSelector from './ConsoleSelector';
import { SerialConsole } from '../SerialConsole';
import { SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE } from '../common/constants';
import { LOADING } from '../SerialConsole/constants';
import { VncConsole } from '../VncConsole';

const MyVncConsoleTestWrapper = () => <p>This can be VncConsole component or a wrapper</p>;

test('ConsoleSelector with SerialConsole as a single child', () => {
  const view = shallow(
    <ConsoleSelector>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
    </ConsoleSelector>
  );
  expect(view).toMatchSnapshot();
});

test('ConsoleSelector with VncConsole as a single child', () => {
  const view = shallow(
    <ConsoleSelector>
      <VncConsole host="foo.bar.host" textDisconnected="Disconnected state text" />
    </ConsoleSelector>
  );
  expect(view).toMatchSnapshot();
});

test('ConsoleSelector with SerialConsole and VncConsole as children', () => {
  const view = shallow(
    <ConsoleSelector>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <VncConsole host="foo.bar.host" textDisconnected="Disconnected state text" />
    </ConsoleSelector>
  );
  expect(view).toMatchSnapshot();
});

const SerialConsoleConnected = () => (
  <p>
    Whatever component, preferably wrapping <i>SerialConsole</i> with callbacks adapted to a particular backend.
  </p>
);

test('ConsoleSelector with wrapped SerialConsole as a child', () => {
  const view = shallow(
    <ConsoleSelector>
      <SerialConsoleConnected type={SERIAL_CONSOLE_TYPE} />
    </ConsoleSelector>
  );
  expect(view).toMatchSnapshot();
});

test('ConsoleSelector switching SerialConsole and VncConsole', () => {
  const wrapper = mount(
    <ConsoleSelector>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </ConsoleSelector>
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

test('ConsoleSelector default setting', () => {
  const wrapperDefault = mount(
    <ConsoleSelector>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </ConsoleSelector>
  );
  expect(wrapperDefault.find('.console-selector-pf-disconnect-switch')).toHaveLength(0);

  const wrapperKeepConnection = mount(
    <ConsoleSelector disconnectByChange={false}>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </ConsoleSelector>
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

test('ConsoleSelector disconnects when switching types', () => {
  const wrapper = mount(
    <ConsoleSelector>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </ConsoleSelector>
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

test('ConsoleSelector keeps connection when switching types', () => {
  const wrapper = mount(
    <ConsoleSelector disconnectByChange={false}>
      <SerialConsole onConnect={noop} onDisconnect={noop} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </ConsoleSelector>
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

test('Empty ConsoleSelector', () => {
  const view = render(<ConsoleSelector />);
  expect(view).toMatchSnapshot();
});
