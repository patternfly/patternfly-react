---
id: Catalog view item header
section: extensions
propComponents: ['CatalogItemHeader']
---

import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from './pfLogo2.svg';
import './catalogItemHeader.css';

## Introduction
Note: Catalog item header lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.

## Examples
### Basic
```js
import React from 'react';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from './examples/pfLogo2.svg';

<CatalogItemHeader
  iconImg={pfLogo2}
  title="PatternFly"
  />
```

### With vendor description
```js
import React from 'react';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo2 from './examples/pfLogo2.svg';

<CatalogItemHeader
  iconImg={pfLogo2}
  title="Patternfly-React"
  vendor={
    <span>
      provided by <a href="http://redhat.com">Red Hat</a>
    </span>
  }
/>
```
