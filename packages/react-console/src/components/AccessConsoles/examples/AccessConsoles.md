---
id: Access consoles
section: extensions
propComponents: ['AccessConsoles']
ouia: false
beta: true
---

### Note
AccessConsoles lives in its own package at [`@patternfly/react-console`](https://www.npmjs.com/package/@patternfly/react-console)

import { AccessConsoles, SerialConsole, VncConsole, DesktopViewer } from '@patternfly/react-console';

## Examples

### Basic Usage
```js
import React from 'react';
import { AccessConsoles, SerialConsole, VncConsole, DesktopViewer } from '@patternfly/react-console';

AccessConsolesVariants = () => {
  const [status, setStatus] = React.useState('disconnected');
  const setConnected = React.useRef(debounce(() => setStatus('connected'), 3000)).current;
  const ref = React.createRef();

  return (
    <AccessConsoles preselectedType="SerialConsole">
      <SerialConsole
        onConnect={() => {
          setStatus('loading');
          setConnected();
        }}
        status={status}
        onDisconnect={() => setStatus('disconnected')}
        onData={data => {
          ref.current.onDataReceived(data);
        }}
        ref={ref}
      />
      <DesktopViewer spice={{ address: '127.0.0.1', port: '5900' }} vnc={{ address: '127.0.0.1', port: '5901' }} />
      <VncConsole host="localhost" port="9090" encrypt shared />
    </AccessConsoles>
  );
};
```
