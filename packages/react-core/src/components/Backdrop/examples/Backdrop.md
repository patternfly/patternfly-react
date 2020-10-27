---
id: Backdrop
section: components
cssPrefix: pf-c-backdrop
propComponents: ['Backdrop']
---

## Examples
### Basic
```js isFullscreen
import React from 'react';
import { Backdrop } from '@patternfly/react-core';

<Backdrop />
```

### With spinner
```js isFullscreen
import React from 'react';
import { Backdrop, Spinner, Bullseye } from '@patternfly/react-core';

<Backdrop>
  <Bullseye>
    <Spinner />
  </Bullseye>
</Backdrop>
```
