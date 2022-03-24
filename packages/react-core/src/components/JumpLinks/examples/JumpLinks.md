---
id: Jump links
section: components
propComponents: ['JumpLinks', 'JumpLinksItem']
---

## Examples

These examples are static because they have no element to scroll spy on that makes sense. Check out the [React demos](./react-demos) to see scroll spying in action!

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

### Expandable vertical with subsection
```js
import React from 'react';
import { JumpLinks, JumpLinksItem, JumpLinksList } from '@patternfly/react-core';

<JumpLinks isVertical label="Jump to section" expandable={{ default: 'expandable' }}>
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem>
    Section with active subsection
    <JumpLinksList>
      <JumpLinksItem isActive>Active subsection</JumpLinksItem>
      <JumpLinksItem>Inactive subsection</JumpLinksItem>
      <JumpLinksItem>Inactive subsection</JumpLinksItem>
    </JumpLinksList>
  </JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
  <JumpLinksItem>Inactive section</JumpLinksItem>
</JumpLinks>
```

