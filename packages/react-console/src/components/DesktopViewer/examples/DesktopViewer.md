---
id: DesktopViewer
section: consoles
propComponents: ['DesktopViewer']
ouia: false
beta: true
---
### Note
DesktopViewer lives in its own package at [`@patternfly/react-console`](https://www.npmjs.com/package/@patternfly/react-console)

import { DesktopViewer } from '@patternfly/react-console';

## Examples

### Basic Usage
```js
import React from 'react';
import { DesktopViewer } from '@patternfly/react-console';

<DesktopViewer spice={{ address: "127.0.0.1", port: "5900" }} vnc={{ address: "127.0.0.1", port: "5901" }} />
```
