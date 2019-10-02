---
title: 'Spinner'
cssPrefix: 'pf-c-spinner'
typescript: true
propComponents: ['Spinner']
section: 'experimental'
---

import { Spinner } from '@patternfly/react-core/dist/esm/experimental';
import { Alert } from '@patternfly/react-core';

<Alert variant="warning" title="Warning">
  Use this component at your own risk, it's currently under development and is subject
  to change.
</Alert>

## Spinner

```js
import React from 'react';
import { Spinner } from '@patternfly/react-core/dist/esm/experimental';

SpinnerSimple = () => (<Spinner/>);
```

# Spinner size variations

```js
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
