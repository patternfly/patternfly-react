---
title: 'Spinner'
cssPrefix: 'pf-c-spinner'
typescript: true
propComponents: ['Spinner']
section: 'experimental'
stage: 'early'
---

import { Spinner } from '@patternfly/react-core/dist/esm/experimental';
import { Alert } from '@patternfly/react-core';

## Spinner

## Examples
```js title=Basic
import React from 'react';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';

SpinnerBasic = () => (<Spinner/>);
```

```js title=Spinner-size-variations
import React from 'react';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';

SpinnerSizeVariations = () => (
<React.Fragment>
    <Spinner size="sm"/>
    <Spinner size="md"/>
    <Spinner size="lg"/>
    <Spinner size="xl"/>
</React.Fragment>
);
```
