import React from 'react';
import { debounce } from '@patternfly/react-core';
import { SerialConsole } from '@patternfly/react-console';

export const SerialConsoleCustom = () => {
  const [status, setStatus] = React.useState('disconnected');
  const setConnected = React.useRef(debounce(() => setStatus('connected'), 3000)).current;
  const ref2 = React.createRef();

  return (
    <SerialConsole
      onConnect={() => {
        setStatus('loading');
        setConnected();
      }}
      onDisconnect={() => setStatus('disconnected')}
      onData={data => {
        ref2.current.onDataReceived(data);
      }}
      status={status}
      ref={ref2}
    />
  );
};
