---
title: 'Divider'
cssPrefix: 'pf-c-divider'
typescript: true 
propComponents: ['Divider']
section: 'experimental'
stage: 'early'
---
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

```js title=Using-hr-(default)
import React from 'react';
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

DividerHr = () => (
  <Divider/>
);
```

```js title=Using-li
import React from 'react';
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

DividerLi = () => (
  <ul>
    <li>List item one</li>
    <Divider component="li"/>
    <li>List item two</li>
  </ul>
);
```

```js title=Using-div
import React from 'react';
import { Divider } from '@patternfly/react-core/dist/esm/experimental';

DividerDiv = () => (
  <Divider component="div"/>
);
```
