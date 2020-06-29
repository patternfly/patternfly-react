---
title: 'Banner'
section: components
cssPrefix: 'pf-c-banner'
typescript: true
propComponents: ['Banner']
beta: true
---

import { Banner } from '@patternfly/react-core';

## Examples

```js title=Basic
import React from 'react';
import { Banner } from '@patternfly/react-core';

BannerVariants = () => (
  <React.Fragment>
    <Banner>Default banner</Banner>
    <br />
    <Banner variant="info">Info banner</Banner>
    <br />
    <Banner variant="danger">Danger banner</Banner>
    <br />
    <Banner variant="success">Success banner</Banner>
    <br />
    <Banner variant="warning">Warning banner</Banner>
  </React.Fragment>
);
```
