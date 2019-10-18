---
title: 'Catalog item header'
section: 'catalog view'
propComponents: ['CatalogItemHeader']
typescript: true
---

import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo from './pfLogo.svg';
import './catalogItemHeader.css';

## Introduction
Note: Catalog item header lives in its own package at [`@patternfly/react-catalog-view-extension`](https://www.npmjs.com/package/@patternfly/react-catalog-view-extension)!

This package is currently an extension. Extension components do not undergo the same rigorous design or coding review process as core PatternFly components. If enough members of the community find them useful, we will work to move them into our core PatternFly system by starting the design process for the idea.

## Examples
```js title=Basic
import React from 'react';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo from './examples/pfLogo.svg';

Basic = () => (
  <React.Fragment>
    <CatalogItemHeader
      iconImg={pfLogo}
      title="PatternFly"
    />
  </React.Fragment>
);
```

```js title=With-vendor-description
import React from 'react';
import { CatalogItemHeader } from '@patternfly/react-catalog-view-extension';
import pfLogo from './examples/pfLogo.svg';

LongDescription = () => (
  <React.Fragment>
    <CatalogItemHeader
      iconImg={pfLogo}
      title="Patternfly-React"
      vendor={
        <span>
          provided by <a href="http://redhat.com">Red Hat</a>
        </span>
      }
    />
  </React.Fragment>
);
```
