import React from 'react';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';

import { AccessConsoles } from '../AccessConsoles';
import { SerialConsole } from '../../SerialConsole';
import { VncConsole } from '../../VncConsole';
import { DesktopViewer } from '../../DesktopViewer';
import { constants } from '../../common/constants';

const { SERIAL_CONSOLE_TYPE, VNC_CONSOLE_TYPE, LOADING } = constants;

const MyVncConsoleTestWrapper = () => <p>This can be VncConsole component or a wrapper</p>;

const vnc = {
  address: 'my.host.com',
  port: 5902,
  tlsPort: '5903'
};

test('AccessConsoles with SerialConsole as a single child', () => {
  const view = render(
    <AccessConsoles>
      <SerialConsole onData={jest.fn()} onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} />
    </AccessConsoles>
  );
  expect(view.container).toMatchSnapshot();
});

test('AccessConsoles with VncConsole as a single child', () => {
  const view = render(
    <AccessConsoles>
      <VncConsole host="foo.bar.host" textDisconnected="Disconnected state text" />
    </AccessConsoles>
  );
  expect(view.container).toMatchSnapshot();
});

test('AccessConsoles with SerialConsole and VncConsole as children', () => {
  const view = render(
    <AccessConsoles>
      <VncConsole host="foo.bar.host" textDisconnected="Disconnected state text" />
      <SerialConsole onData={jest.fn()} onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} />
    </AccessConsoles>
  );
  expect(view.container).toMatchSnapshot();
});

const SerialConsoleConnected = () => (
  <p>
    Whatever component, preferably wrapping <i>SerialConsole</i> with callbacks adapted to a particular backend.
  </p>
);

test('AccessConsoles with wrapped SerialConsole as a child', () => {
  const view = render(
    <AccessConsoles>
      <SerialConsoleConnected type={SERIAL_CONSOLE_TYPE} />
    </AccessConsoles>
  );
  expect(view.container).toMatchSnapshot();
});

test('AccessConsoles with preselected SerialConsole', () => {
  const wrapper = render(
    <AccessConsoles preselectedType={SERIAL_CONSOLE_TYPE}>
      <SerialConsoleConnected type={SERIAL_CONSOLE_TYPE} />
    </AccessConsoles>
  );
  expect(wrapper.container).toMatchSnapshot();
});

test('AccessConsoles switching SerialConsole and VncConsole', () => {
  const wrapper = mount(
    <AccessConsoles>
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
      <SerialConsole onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} />
    </AccessConsoles>
  );

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('SerialConsole')).toHaveLength(0);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(0);

  const button = wrapper.find('button#pf-c-console__type-selector');
  button.simulate('click');
  expect(wrapper.find('SerialConsole')).toHaveLength(0);

  let consoleItems = wrapper.find('ul li');
  expect(consoleItems).toHaveLength(2);
  consoleItems
    .at(1)
    .find('button')
    .simulate('click');
  expect(consoleItems).toMatchSnapshot();
  expect(wrapper.find('SerialConsole')).toHaveLength(1);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(0);

  button.simulate('click');
  consoleItems = wrapper.find('ul li');
  expect(consoleItems).toHaveLength(2);
  consoleItems
    .at(0)
    .find('button')
    .simulate('click');
  expect(consoleItems).toMatchSnapshot();
  expect(wrapper.find('SerialConsole')).toHaveLength(0);
  expect(wrapper.find('MyVncConsoleTestWrapper')).toHaveLength(1);
});

test('AccessConsoles default setting', () => {
  const wrapperKeepConnection = mount(
    <AccessConsoles>
      <SerialConsole onData={jest.fn()} onConnect={jest.fn()} onDisconnect={jest.fn()} status={LOADING} />
      <MyVncConsoleTestWrapper type={VNC_CONSOLE_TYPE} />
    </AccessConsoles>
  );
  wrapperKeepConnection.find('button#pf-c-console__type-selector').simulate('click');
  wrapperKeepConnection
    .find('ul li')
    .first()
    .find('button')
    .simulate('click'); // Select SerialConsole
});

test('Empty AccessConsoles', () => {
  const view = render(<AccessConsoles />);
  expect(view.container).toMatchSnapshot();
});

test('AccessConsoles with DesktopViewer', () => {
  const view = render(
    <AccessConsoles>
      <DesktopViewer vnc={vnc} />
    </AccessConsoles>
  );
  expect(view.container).toMatchSnapshot();
});
