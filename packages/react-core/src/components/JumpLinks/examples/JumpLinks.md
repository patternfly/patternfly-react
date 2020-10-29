---
id: Jump links
section: components
---

## Examples
### Basic
```js
import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

<JumpLinks>
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem isActive>Active section</JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
</JumpLinks>
```

### With centered list
```js
import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

<JumpLinks isCentered>
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem isActive>Active section</JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
</JumpLinks>
```

### With label
```js
import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

<React.Fragment>
  <JumpLinks label="Jump to section">
    <JumpLinksItem>Inactive section</JumpLinksItem>
    <JumpLinksItem isActive>Active section</JumpLinksItem>
    <JumpLinksItem>Inactive section</JumpLinksItem>
  </JumpLinks>
  <JumpLinks isCentered label="Jump to section">
    <JumpLinksItem>Inactive section</JumpLinksItem>
    <JumpLinksItem isActive>Active section</JumpLinksItem>
    <JumpLinksItem>Inactive section</JumpLinksItem>
  </JumpLinks>
</React.Fragment>
```

### Vertical
```js
import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

<JumpLinks isVertical>
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem isActive>Active section</JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
</JumpLinks>
```

### Vertical with label
```js
import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

<JumpLinks isVertical label="Jump to section">
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem isActive>Active section</JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
</JumpLinks>
```
