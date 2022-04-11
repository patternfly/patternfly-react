import * as React from 'react';

import { AccessConsoles, SerialConsole, DesktopViewer, VncConsole } from '@patternfly/react-console';
import { debounce } from '@patternfly/react-core';

export const ConsolesDemo: React.FunctionComponent = () => {
  const [status, setStatus] = React.useState('disconnected');
  const setConnected = React.useRef(debounce(() => setStatus('connected'), 3000)).current;
  const ref = React.createRef<any>();

  return (
    <div className="consoles-demo-area">
      <AccessConsoles preselectedType="SerialConsole">
        <SerialConsoleCustom type="SerialConsole" typeText="Serial Console pty2" />
        <SerialConsole
          onConnect={() => {
            setStatus('loading');
            setConnected();
          }}
          status={status}
          onDisconnect={() => setStatus('disconnected')}
          onData={(data: string) => {
            ref.current.onDataReceived(data);
          }}
          ref={ref}
        />
        <DesktopViewer spice={{ address: '127.0.0.1', port: '5900' }} vnc={{ address: '127.0.0.1', port: '5901' }} />
        <VncConsole host="localhost" port="9090" encrypt shared />
      </AccessConsoles>
    </div>
  );
};
ConsolesDemo.displayName = 'ConsolesDemo';

const SerialConsoleCustom: React.FunctionComponent<{ type: string; typeText: string }> = () => {
  const [status, setStatus] = React.useState('disconnected');
  const setConnected = React.useRef(debounce(() => setStatus('connected'), 3000)).current;
  const ref2 = React.createRef<any>();

  return (
    <SerialConsole
      onConnect={() => {
        setStatus('loading');
        setConnected();
      }}
      onDisconnect={() => setStatus('disconnected')}
      onData={(data: string) => {
        ref2.current.onDataReceived(data);
      }}
      status={status}
      ref={ref2}
    />
  );
};
