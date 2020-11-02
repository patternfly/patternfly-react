---
id: Jump links
section: components
propComponents: ['JumpLinks', 'JumpLinksItem']
beta: true
---

## Examples
### Basic
```js
import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

<JumpLinks hasScrollSpy={false}>
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem isActive>Active section</JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
</JumpLinks>
```

### With centered list
```js
import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

<JumpLinks hasScrollSpy={false} isCentered>
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
  <JumpLinks hasScrollSpy={false} label="Jump to section">
    <JumpLinksItem>Inactive section</JumpLinksItem>
    <JumpLinksItem isActive>Active section</JumpLinksItem>
    <JumpLinksItem>Inactive section</JumpLinksItem>
  </JumpLinks>
  <JumpLinks hasScrollSpy={false} isCentered label="Jump to section">
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

<JumpLinks hasScrollSpy={false} isVertical>
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem isActive>Active section</JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
</JumpLinks>
```

### Vertical with label
```js
import React from 'react';
import { JumpLinks, JumpLinksItem } from '@patternfly/react-core';

<JumpLinks hasScrollSpy={false} isVertical label="Jump to section">
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem isActive>Active section</JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
</JumpLinks>
```
