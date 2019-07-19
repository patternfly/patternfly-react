---
title: 'Button'
cssPrefix: 'pf-c-button'
typescript: true
propComponents: ['Button']
section: 'experimental'
---


import { Button as ExperimentalButton } from '@patternfly/react-core/dist/esm/experimental';
import { Alert } from '@patternfly/react-core';

<Alert variant="danger" title="Warning">
  Please don't use this component, it's only an example of what an experimental component could be
  and likely going away in our next release.
  Use our <a href="../../components/button">actual Button instead.</a>
</Alert>
<br />

## Render button
```js
import React from 'react';
import { Button as ExperimentalButton } from '@patternfly/react-core/dist/esm/experimental';

RenderButton = () => <ExperimentalButton render={false}>Block level button</ExperimentalButton>;
```
