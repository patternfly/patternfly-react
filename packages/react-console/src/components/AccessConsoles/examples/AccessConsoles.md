---
id: AccessConsoles
section: consoles
propComponents: ['AccessConsoles']
ouia: false
beta: true
---

### Note
AccessConsoles lives in its own package at [`@patternfly/react-console`](https://www.npmjs.com/package/@patternfly/react-console)

import { AccessConsoles, DesktopViewer } from '@patternfly/react-console';
import '@patternfly/react-console/dist/css/react-console.css';

## Examples

### Basic Usage
```js
import React from 'react';
import { AccessConsoles, DesktopViewer } from '@patternfly/react-console';

AccessConsolesVariants = () => {
  return (
    <AccessConsoles preselectedType="SerialConsole">
      <div type="SerialConsole">This can be replaced by the SerialConsole component</div>
      <DesktopViewer spice={{ address: "127.0.0.1", port: "5900" }} vnc={{ address: "127.0.0.1", port: "5901" }} />
      <div type="VncConsole">This can be replaced by the VncConsole component</div>
    </AccessConsoles>
  );
};
```
