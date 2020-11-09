import * as React from 'react';

import { AccessConsoles, SerialConsole, DesktopViewer, VncConsole } from '@patternfly/react-console';
import { debounce } from '@patternfly/react-core';

export const ConsolesDemo: React.FC = () => {
  const [status, setStatus] = React.useState('disconnected');
  const setConnected = React.useRef(debounce(() => setStatus('connected'), 3000)).current;
  const ref = React.createRef<any>();

  return (
    <div className="consoles-demo-area">
      <AccessConsoles preselectedType="SerialConsole">
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
